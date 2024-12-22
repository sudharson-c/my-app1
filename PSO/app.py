from flask import Flask, request, jsonify
import numpy as np
from scipy.spatial.distance import euclidean


class Particle:
    def __init__(self, num_dimensions):
        self.position = np.random.rand(num_dimensions)
        self.velocity = np.random.rand(num_dimensions)
        self.best_position = self.position.copy()
        self.best_score = float('-inf')


class LocationOptimizer:
    def __init__(self, num_particles, num_iterations, w, c1, c2):
        self.num_particles = num_particles
        self.num_iterations = num_iterations
        self.w = w  # Inertia weight
        self.c1 = c1  # Cognitive weight
        self.c2 = c2  # Social weight

    def optimize(self, locations, user_preferences):
        num_dimensions = len(user_preferences) - 2  # Exclude current lat and lon
        particles = [Particle(num_dimensions) for _ in range(self.num_particles)]
        global_best_position = np.random.rand(num_dimensions)
        global_best_score = float('-inf')

        for _ in range(self.num_iterations):
            for particle in particles:
                score = self.fitness_function(particle.position, locations, user_preferences)

                if score > particle.best_score:
                    particle.best_score = score
                    particle.best_position = particle.position.copy()

                if score > global_best_score:
                    global_best_score = score
                    global_best_position = particle.position.copy()

                # Update velocity and position
                r1, r2 = np.random.rand(2)
                particle.velocity = (
                    self.w * particle.velocity +
                    self.c1 * r1 * (particle.best_position - particle.position) +
                    self.c2 * r2 * (global_best_position - particle.position)
                )
                particle.position = np.clip(particle.position + particle.velocity, 0, 1)

        return self.get_best_location(global_best_position, locations, user_preferences)

    def fitness_function(self, particle_position, locations, user_preferences):
        scores = []
        for location in locations:
            score = sum(
                w * self.feature_score(p, l, i, t)
                for w, p, l, i, t in zip(
                    particle_position,
                    user_preferences[2:],  # Exclude current lat and lon
                    location[3:],  # Exclude name, lat, lon
                    range(3, len(location)),  # Feature indices
                    range(len(user_preferences[2:]))  # Feature type indicator
                )
            )
            # Add distance score
            distance = euclidean(user_preferences[:2], location[1:3])
            distance_score = 1 / (1 + distance / 1000)  # Normalize distance score
            score += distance_score
            scores.append(score)
        return max(scores)

    def feature_score(self, preference, location_feature, feature_index, feature_type):
        if feature_type == 0:  # Budget
            if isinstance(preference, tuple):
                pref_min, pref_max = preference
                if isinstance(location_feature, tuple):
                    loc_min, loc_max = location_feature
                    overlap = max(0, min(pref_max, loc_max) - max(pref_min, loc_min))
                    total_range = max(pref_max, loc_max) - min(pref_min, loc_min)
                    return overlap / total_range if total_range > 0 else 0
                if pref_min <= location_feature <= pref_max:
                    return 1
                return 1 - min(abs(location_feature - pref_min), abs(location_feature - pref_max)) / (pref_max - pref_min)
            else:
                return 1 - abs(preference - location_feature) / max(preference, location_feature)

        elif feature_type == 1:  # Duration
            return 1 - abs(preference - location_feature) / max(preference, location_feature)

        elif feature_type == 2:  # Companions
            return 1 - abs(preference - location_feature) / max(preference, location_feature, 1)

        elif feature_type in [3, 4]:  # Accommodation and Transportation
            return self.categorical_similarity(preference, location_feature)

        return 0

    def categorical_similarity(self, preference, feature):
        if isinstance(preference, str) and isinstance(feature, str):
            return 1 if preference.lower() == feature.lower() else 0
        if isinstance(preference, list) and isinstance(feature, list):
            return len(set(preference) & set(feature)) / len(set(preference) | set(feature))
        return 0

    def get_best_location(self, best_position, locations, user_preferences):
        best_score = float('-inf')
        best_location = None
        for location in locations:
            score = sum(
                w * self.feature_score(p, f, i, t)
                for w, p, f, i, t in zip(
                    best_position,
                    user_preferences[2:],  # Exclude current lat and lon
                    location[3:],  # Exclude name, lat, lon
                    range(3, len(location)),  # Feature indices
                    range(len(user_preferences[2:]))  # Feature type indicator
                )
            )
            # Add distance score
            distance = euclidean(user_preferences[:2], location[1:3])
            distance_score = 1 / (1 + distance / 1000)
            score += distance_score
            if score > best_score:
                best_score = score
                best_location = location
        return best_location


# Flask app
app = Flask(__name__)


@app.route('/optimize', methods=['POST'])
def optimize():
    data = request.json
    data ={
  "locations": [
    ["Meenakshi Amman Temple", 9.9260, 78.1131, [800, 1200], 2, 4, ["hotel", "hostel"], ["walking", "auto-rickshaw"]],
    ["Thiruparankundram Temple", 9.9075, 78.1269, [500, 800], 1, 3, ["hotel", "hostel"], ["walking", "auto-rickshaw"]]
  ],
  "user_preferences": [9.8822, 78.0836, [500, 800], 2, 3, ["hotel"], ["walking", "auto-rickshaw"]]
}

    locations = data['locations']
    user_preferences = data['user_preferences']

    optimizer = LocationOptimizer(
        num_particles=30,
        num_iterations=100,
        w=0.5,
        c1=1,
        c2=2
    )
    best_location = optimizer.optimize(locations, user_preferences)
    return jsonify({
        "best_location": best_location
    })


if __name__ == '__main__':
    app.run(debug=True)

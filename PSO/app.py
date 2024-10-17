import numpy as np
from scipy.spatial.distance import euclidean
from pso import Pso

# User's current location (latitude, longitude)
current_location = [9.900171, 78.118588]  # Example: Somewhere in Madurai

# List of other locations (latitude, longitude)
locations = [
    [9.926030, 78.113050],  # Meenakshi Amman Temple
    [9.923526, 78.113852],  # Thirumalai Nayakkar Palace
    [9.9143, 78.1138],  # Koodal Azhagar Temple
    [9.9273, 78.2134]   # Gandhi Museum
]

# Include the user's current location at the start of the list
locations.insert(0, current_location)

# Objective function: Calculate the total distance of the route
def objective_function(route):
    total_distance = 0
    for i in range(len(route) - 1):
        total_distance += euclidean(locations[route[i]], locations[route[i + 1]])
    # Optionally, return to the start (making it a round trip)
    total_distance += euclidean(locations[route[-1]], locations[route[0]])
    return total_distance

# Define bounds (route indices)
lower_bound = [0] * len(locations)
upper_bound = [len(locations) - 1] * len(locations)

# Initialize PSO instance
pso = Pso(swarmsize=30, maxiter=50)

# Run PSO to find the optimal route
best_route, best_distance = pso.run(objective_function, lower_bound, upper_bound)

# Print results
print("Best Route (excluding current location):", best_route[1:])
print("Best Distance:", best_distance)

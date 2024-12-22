const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Sample places dataset (modify as needed)
const placesDataset = [
  { name: 'Restaurant A', food: { Budget: 5, 'High Rating': 9, 'Cuisine Type': 8, 'Dining Style': 7 }, location: { lat: 40.7128, lon: -74.0060 }, category: 'Food' },
  { name: 'Museum B', food: { Budget: 3, 'High Rating': 8, 'Cuisine Type': 4, 'Dining Style': 6 }, location: { lat: 40.7308, lon: -73.9973 }, category: 'Culture' },
  { name: 'Hiking Spot C', food: { Budget: 2, 'High Rating': 8, 'Cuisine Type': 3, 'Dining Style': 5 }, location: { lat: 40.7580, lon: -73.9855 }, category: 'Adventure' },
  // Add more places
];

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Helper function to calculate distance penalty
const calculateDistancePenalty = (placeLocation, userLocation) => {
  const distance = Math.sqrt(
    Math.pow(placeLocation.lat - userLocation.lat, 2) + Math.pow(placeLocation.lon - userLocation.lon, 2)
  );
  return distance * 10; // Adjust penalty weight as needed
};

// Fitness function for PSO
const fitness = (place, userPreferences) => {
  const { purpose, factors, location } = userPreferences;
  const weights = getCategoryWeights(purpose);

  let score = 0;
  factors.forEach(factor => {
    if (place.food[factor] !== undefined) {
      score += place.food[factor] * weights[factor];
    }
  });

  // Apply distance penalty
  const distancePenalty = calculateDistancePenalty(place.location, location);
  score -= distancePenalty;

  return score;
};

// Function to get the category weights
const getCategoryWeights = (category) => {
  switch (category) {
    case 'Food':
      return { 'Budget': 1, 'High Rating': 3, 'Cuisine Type': 2, 'Dining Style': 1 };
    case 'Culture':
      return { 'Historical Sites': 2, 'Museums': 3, 'Festivals': 2, 'Guided Tours': 1 };
    case 'Adventure':
      return { 'Outdoor Activities': 3, 'Hiking Spots': 3, 'Nature Reserves': 2, 'Extreme Sports': 2 };
    default:
      return {};
  }
};

// PSO Algorithm Implementation
const particleSwarmOptimization = (places, userPreferences, iterations = 20, numParticles = 10) => {
  // Initialize particles
  const particles = Array.from({ length: numParticles }, () => ({
    position: places[Math.floor(Math.random() * places.length)], // Random place
    velocity: 0,
    bestPosition: null,
    bestFitness: -Infinity,
  }));

  let globalBestPosition = null;
  let globalBestFitness = -Infinity;

  // Optimization loop
  for (let iter = 0; iter < iterations; iter++) {
    particles.forEach(particle => {
      const currentFitness = fitness(particle.position, userPreferences);

      // Update particle's personal best
      if (currentFitness > particle.bestFitness) {
        particle.bestFitness = currentFitness;
        particle.bestPosition = particle.position;
      }

      // Update global best
      if (currentFitness > globalBestFitness) {
        globalBestFitness = currentFitness;
        globalBestPosition = particle.position;
      }

      // Update velocity and position
      const inertia = 0.5; // Weight for current velocity
      const cognitive = 2 * Math.random(); // Cognitive weight
      const social = 2 * Math.random(); // Social weight

      particle.velocity =
        inertia * particle.velocity +
        cognitive * (particle.bestFitness - currentFitness) +
        social * (globalBestFitness - currentFitness);

      // Update particle position (move to a new place based on velocity)
      const index = places.indexOf(particle.position);
      const newIndex = (index + Math.round(particle.velocity)) % places.length;
      particle.position = places[newIndex];
    });
  }

  // Get the top 3 recommendations
  return particles
    .sort((a, b) => fitness(b.position, userPreferences) - fitness(a.position, userPreferences))
    .slice(0, 3)
    .map(particle => particle.position.name);
};

// API Route to get recommendations
app.post('/getRecommendations', (req, res) => {
  const { purpose, factors, location } = req.body; // { purpose: 'Food', factors: ['Budget', 'High Rating'], location: { lat, lon } }

  if (!purpose || !factors || !location) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    const recommendations = particleSwarmOptimization(placesDataset, { purpose, factors, location });
    return res.json({ recommendations });
  } catch (error) {
    console.error('Error processing recommendations:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

# data.py
import numpy as np

def calculate_distance(point1, point2):
    # Simple Euclidean distance calculation
    return np.sqrt(np.sum((np.array(point1) - np.array(point2)) ** 2))

# Example set of locations (latitude, longitude)
locations = [
    [12.9715987, 77.594566],
    [12.2958104, 76.6393805],
    [11.0168445, 76.9558321],
    [13.0826802, 80.2707184]
]

# Lower and upper bounds for latitude and longitude (for demonstration)
lower_bound = [11.0, 76.0]
upper_bound = [14.0, 81.0]

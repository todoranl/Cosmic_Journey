// src/components/PlanetActivities.js
import React from 'react';
import '../styles/PlanetActivities.css'; // Import your CSS

const activityData = {
    Venus: [
        { img: 'Venus/venus1.jpg', description: 'Activity Description 1' },
        { img: 'Venus/venus2.jpg', description: 'Activity Description 2' },
        // Add more activities as needed
    ],
    // Add other planets' activities similarly
};

const PlanetActivities = ({ planetName }) => {
    const activities = activityData[planetName];

    return (
        <div className="activities-grid">
            {activities.map((activity, index) => (
                <div key={index} className="activity-item">
                    <img src={require(`../images/${activity.img}`)} alt={`Activity ${index + 1}`} />
                    <p>{activity.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PlanetActivities;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = ({ token }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/properties', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the properties!', error);
            });
    }, [token]);

    const handleInterest = (property) => {
        alert(`Interested in property: ${property.title}. Seller: ${property.seller.email}`);
        // Additional logic to notify the seller could go here
    };

    return (
        <div>
            <h2>Available Properties</h2>
            {properties.map(property => (
                <div key={property._id} className="property">
                    <h3>{property.title}</h3>
                    <p>{property.description}</p>
                    <p>Location: {property.location}</p>
                    <p>Bedrooms: {property.bedrooms}</p>
                    <p>Bathrooms: {property.bathrooms}</p>
                    <p>Rent: ${property.rent}</p>
                    <button onClick={() => handleInterest(property)}>I'm Interested</button>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;

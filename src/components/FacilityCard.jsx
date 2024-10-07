import React from 'react';
import './facilities.css';

function FacilityCard({ name, img }) {
    return (
        <div className="card">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default FacilityCard;

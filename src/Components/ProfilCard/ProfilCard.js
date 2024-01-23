import React from 'react';
import './ProfilCard.css';

const ProfilCard = () => {
    return (
        <div className='row'>
            <div className='col'>
                Welcome, Peter
                <div style={{width: "100px"}}>
                    <a href="#">
                        <button className="btn1">Logout</button>
                    </a>
                </div>
                
            </div>
            <div className='col'>
                <p>Your Profile</p>
            </div>
        </div>
    );
}

export default ProfilCard;
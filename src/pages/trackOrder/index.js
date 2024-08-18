import React from 'react';

const TrackOrder = () => {
    return (
        <div className='pdTop_80 trackOrder'>
            <div className='container'>
                <div className='row'>
                    <h2> Track Order </h2>
                </div>
                <div className='col-5 TrackOrderInput'>
                    <h3> Check Your Order Status </h3>
                    <input type="text" placeholder='Order Code:' />
                    <button> Track Order </button>
                </div>
            </div>
        </div>
    );
}

export default TrackOrder;

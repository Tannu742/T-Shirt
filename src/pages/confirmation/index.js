import React from 'react';
import successPayment from '../../assets/img/success.gif'

const Confirmation = () => {
    return (
        <div className='pdTop_120 successPayment text-align-center'>
            <h2>Thank you for shopping With us Your order has been placed.</h2>
            <img height={250} src={successPayment} alt="payment Done" />
            <h4>OrderId:<span> {Math.random()} </span></h4>
        </div>
    );
}

export default Confirmation;

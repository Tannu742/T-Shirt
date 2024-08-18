import React from 'react';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faCreditCard, faMap } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const CartLink = () => {
    return (
            <div className='row justify-content-spaceAround cartsectionIcon'>
                <div className='col-2'>
                    <NavLink to={'/cart'} className={'cartLinks'}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <h3> 1. My Cart</h3>
                    </NavLink>
                </div>  
                <div className='col-2'>
                    <NavLink to={'/shipping'} className={'cartLinks'}>
                    <FontAwesomeIcon icon={faMap} />
                    <h3>2. Shipping info</h3>
                    </NavLink>
                </div>
                <div className='col-2'>
                    <NavLink to={'/payment'} className={'cartLinks'}>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <h3> 3. Payment</h3>
                    </NavLink>
                </div>
                <div className='col-2'>
                    <NavLink to={'/confirmation'} className={'cartLinks'}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <h3> 4. Confirmation</h3>
                    </NavLink>
                </div>
            </div>
    );
}

export default CartLink;

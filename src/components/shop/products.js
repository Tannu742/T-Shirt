import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FeaturedProducts = ({ img, name, price, percentOff, productId }) => {
    return (
        <div className='featuredProductRow'>
            <Link to={`/home/${productId}`}>
                <div className='featuredProduct'>
                    <img src={img} alt="ProductImg" />
                    <h3>{price}</h3>
                    <p>{name}</p>
                    <div className='featuredProductIcons'>
                        <div className='IconProduct iconWish'>
                            <FontAwesomeIcon className='icon' icon={faHeart} />
                            <div className='iconText'>
                                <h6> Add to wishlist </h6>
                            </div>
                        </div>
                        <div className='IconProduct iconCompare'>
                            <FontAwesomeIcon className='icon' icon={faArrowRotateBackward} />
                            <div className='iconText'>
                                <h6> Add to compare </h6>
                            </div>
                        </div>
                        <div className='IconProduct iconCart'>
                            <FontAwesomeIcon className='icon' icon={faCartShopping} />
                            <div className='iconText'>
                                <h6> Add to cart </h6>
                            </div>
                        </div>
                    </div>
                    {
                        percentOff ? <div className='productOff'>
                            <h3>OFF <span>40%</span></h3>
                        </div> : null
                    }
                </div>
            </Link>
        </div>
    );
}

export default FeaturedProducts;
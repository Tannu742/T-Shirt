import t_shirt from '../../assets/img/logo.webp'
import men_banner from '../../assets/img/men-banner.webp'
import women_banner from '../../assets/img/women-banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faCaretDown, faArrowsRotate, faMagnifyingGlass, faMapMarkerAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import siteData from '../../data';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCart } from '../../features/cart/cartSlice';

const SrchAdd = '0';

const Header = () => {
    const { cart } = useSelector(({ cart }) => cart)
    const dispatch = useDispatch();
    console.log(cart);
    const [emptyPopUp, setEmptyPopUp] = useState(true);

    const handleDeleteToCart = (index) => {
        dispatch(deleteCart(index));
    }

    return (
        <header className='header'>
            <div className='row headEnterInfo'>
                <div className='col-7 email'>
                    <span> Email us:</span>
                    <a href="mailto:support@t-store.in">support@t-store.in</a>
                </div>
                <div className=' row col-3'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <a href="/trackOrder"> TRACK ORDER </a>
                    <hr />
                    <a href="/signin"> Sign in </a>
                    <hr />
                    <a href="/signup"> Sign up </a>
                </div>
            </div>
            <div className='container'>
                <div className='row headMain'>
                    <div className='col-5 row align-items-center'>
                        <img className='tshirt_logo' src={t_shirt} alt="t_shirt" />
                        <ul>
                            {
                                siteData.header.menus.map(({ item, value, subMenu }) => {
                                    return (
                                        <li key={value} className='menSection'>
                                            <a href={value}>{item} {subMenu?.length ? <FontAwesomeIcon className='arrow_down' icon={faCaretDown} /> : null}</a>
                                            {
                                                subMenu?.length ? <div className='Men_links row'>
                                                    <div className='Men_info col-4_5'>
                                                        <ul>
                                                            <li><h3>TopWear</h3></li>
                                                            {
                                                                subMenu.map(({ item: subMenuItem, value: subMenuValue }) => (
                                                                    <li key={subMenuValue}><a href={subMenuValue}>{subMenuItem}</a></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div className='Men_img col-4_5'>
                                                        <img className="col-6" src={value === 'men' ? men_banner : women_banner} alt="men" />
                                                    </div>
                                                </div> : null
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='col-5 align-content-center justify-content-right row'>
                        <div className='positionRelative'>
                        <FontAwesomeIcon className='search_logo' icon={faMagnifyingGlass} />
                        </div>
                        <div className='positionRelative'>
                            <FontAwesomeIcon className='search_logo' icon={faArrowsRotate} />
                            <span className='searchLogoAdd'>{SrchAdd}</span>
                        </div>
                        <div className='positionRelative'>
                            <FontAwesomeIcon className='search_logo' icon={faHeart} />
                            <span className='searchLogoAdd'>{SrchAdd}</span>
                        </div>
                        <div className='positionRelative'>
                            <FontAwesomeIcon className='search_logo' onClick={() => setEmptyPopUp(!emptyPopUp)} icon={faCartShopping} />
                            <span className='searchLogoAdd'>{cart && cart.length ? cart.length : SrchAdd}</span>
                            {!emptyPopUp && <div className='cartItemsList'>
                            {cart.length ? 
                                <div className='row'>
                                    <h4>Cart Items</h4>
                                </div> : null}
                                <ul>
                                    {
                                        cart.length ? cart.map((item,index) => {
                                            return (
                                                <li key={item.productId} className='cartItemsLi w-100'>
                                                    <div className='row justify-content-spaceBetween'>
                                                        <img src={item.img} alt="" />
                                                        <p>{item.name}</p>
                                                        <span>{item.price}</span>
                                                        <FontAwesomeIcon icon={faXmark} onClick={()=>handleDeleteToCart(index)}/>
                                                    </div>
                                                </li>
                                            )
                                        })
                                        : (!emptyPopUp ? <li className='emptyemojipop'>
                                                <FontAwesomeIcon className='search_logo' icon={faFaceFrown} />
                                                <h5>Your Cart is empty</h5>
                                            </li> : null)
                                    }
                                    {
                                        cart.length ? <li className='viewCartLink'><Link to={'/cart'}>view Cart</Link></li> : null
                                    }
                                </ul>
                            </div> } 
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

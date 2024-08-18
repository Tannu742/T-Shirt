import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../../features/cart/cartSlice';
import CartLink from '../../components/cart';

const Cart = () => {
    const { cart } = useSelector(({ cart }) => cart);
    console.log(cart);
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        if (cart) {
            console.log(cart);
        }
    }, [cart]);

    const handleReturnShop = () => {
        navigate('/')
    }

    const handleShipping = () => {
        navigate('/shipping')
    }

    const handleDeleteToCart = (index) => {
        dispatch(deleteCart(index));
    }
    return (
        <div className="container cartSection">
            <CartLink/>
            <div className='container cartAddItem marginAuto'>
                <div className='row'>
                    <div className='col-5'>
                        <h3>Product</h3>
                    </div>
                    <div className='col-5'>
                        <ul className='row justify-content-spaceBetween'>
                            <li>Price</li>
                            <li>Tax</li>
                            <li>Quantity</li>
                            <li>Total</li>
                            <li>Remove</li>
                        </ul>
                    </div>
                </div>
                {
                    cart.length ? cart.map((item, i) => {
                        return <div className='row' key={item.productId}>
                            <div className='col-5'>
                                <li className='myCartProduct'>
                                    <img src={item.img} alt="" />
                                    <h5>{item.name}</h5>
                                </li>
                            </div>
                            <div className='col-5'>
                                <div className='myCartProductQuantity dFlex justify-content-spaceBetween'>
                                    <li>
                                        <span>{item.price}</span>
                                    </li>
                                    <li>
                                        <div className='dFlex align-items-center'>
                                            <button onClick={() => setCount(count - 1)} disabled={count === 1 ? true : false} className='qtyBtn'> - </button>
                                            <span> {count} </span>
                                            <button onClick={() => setCount(count + 1)} disabled={count >= 8 ? true : false} className='qtyBtn'> + </button>
                                        </div>
                                    </li>
                                    <li>
                                        <span>{item.price * count}</span>
                                    </li>
                                    <li>
                                        <div className='removeCart' onClick={() => handleDeleteToCart(i)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </div>
                                    </li>
                                </div>
                            </div>
                        </div>
                    }) : null}
            </div>
            <div className='row justify-content-spaceAround'>
                <span> Total Gross Price </span>
                <span>{count}</span>
            </div>
            <div className='cartBackRow'>
                <button className='cartReturnBtn' onClick={handleReturnShop}> Return to shop </button>
                <button className='product_buy cartBtn fRight' onClick={handleShipping}> Continue to Shipping </button>
            </div>
        </div>
    );
}

export default Cart;

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Inch from '../../components/table/inch';
import Cm from '../../components/table/cm';
import siteData from '../../data';
import Modal from '../../components/modal';
import Description from '../../components/description';
import Delivery from '../../components/delivery';
import Review from '../../components/reviews';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

const tableType = { inch: 'INCH', cm: 'CM' };
const tabs = { DIS: 'DIS', REVIEWS: 'REVIEWS', DELIVERY: 'DELIVERY' };

const SingleProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = siteData.products.find((item) => +item.productId === +productId);
    const [count, setCount] = useState(1);
    const [showCartModal, setShowCartModal] = useState(false);
    const [showSizeModal, setShowSizeModal] = useState(false);
    const [showOutStock, setShowOutStock] = useState(false);
    const [active, setActive] = useState('');
    const [tab, setTab] = useState(tabs.DIS);
    const [inch, setInch] = useState(tableType.inch);
    const [productImg, setProductImg] = useState(product.img || '');

    const handleClosePopUp = () => {
        setShowCartModal(false);
    };
    const handleAddToCart = () => {
        if (active === 'M' || active === 'L' || active === 'XL') {
            setShowCartModal(true);
            dispatch(addToCart(product));
        } else alert('please select size option to continue'); 
    }
    return (
        <div className="home">
            <div className="row homeLayout">
                <p>Home / sweetshirts / <span>BLACK COTTON SWEETSHIRT</span></p>
            </div>
            <div className='product row my-10'>
                <div className='product_S_Img'>
                    {
                        product.thumbnails.map((src) => <img src={src} key={src} alt="tshirt" onClick={() => setProductImg(src)} />)
                    }
                </div>
                <div className='Product_B_Img px-10'>
                    <img src={productImg} alt="tshirtA" />
                </div>
                <div className='product_Description'>
                    <div className='product_Des_name my-10'>
                        <p>{product.name}</p>
                    </div>
                    <div className='product_des_price my-10'>
                        <h4>Price:</h4>
                        <p> $ {product.price} <span>/PC</span> </p>
                        <pre>(Inclusive of all taxes)</pre>
                    </div>
                    <div className='product_des_size my-10'>
                        <h4>Size: <span onClick={() => setShowSizeModal(true)}> Size chart</span></h4>
                        <Modal show={showSizeModal} className='size_chart' handleClosePopUp={() => setShowSizeModal(false)} title={'Size Chart'}>
                            <div className='popUp_table'>
                                <div className='popUp_tableRadio text-align-center'>
                                    <input type="radio" id='In' name='sizeChart' onClick={() => setInch(tableType.inch)} /><label for="In"><span> IN</span></label>
                                    <input type="radio" id='Cm' name='sizeChart' onClick={() => setInch(tableType.cm)} /><label for='Cm'><span> CM</span></label>
                                </div>
                                {
                                    inch === tableType.inch ? <Inch /> : <Cm />
                                }
                            </div>
                        </Modal>
                        <div className='row my-10'>
                            <button className={`sizeBtn ${active === 'M' ? 'active' : ''}`} onClick={() => setActive('M')}>M</button>
                            <button className={`sizeBtn ${active === 'L' ? 'active' : ''}`} onClick={() => setActive('L')}>L</button>
                            <button className={`sizeBtn ${active === 'XL' ? 'active' : ''}`} onClick={() => setActive('XL')}>XL</button>
                        </div>
                    </div>
                    <div className='product_des_coupon my-10'>
                        <h4>Coupon Codes</h4>
                    </div>
                    <div className='product_des_quantity my-10'>
                        <h4>Quantity : </h4>
                        <button onClick={() => setCount(count - 1)} disabled={count === 1 ? true : false} className='qtyBtn'> - </button>
                        <span> {count} </span>
                        <button onClick={() => setCount(count + 1)} disabled={count >= 10 ? true : false} className='qtyBtn'> + </button>
                    </div>
                    <div className='product_des_tolPrice'>
                        <p>Total Price : <span> {product.price * count}</span></p>
                    </div>
                    <div className='product_des_buy my-10'>
                        <button className='cartBtn product_cart' onClick={handleAddToCart} > Add to cart </button>
                        <Modal show={showCartModal} className='addToCart' handleClosePopUp={() => setShowCartModal(false)} title={'Item added to your cart!'}>
                            <div className='addProduct row'>
                                <div className='col-3'>
                                    <img src={product.img} alt="" />
                                </div>
                                <div className='col-7 text-align-left'>
                                    <p>{product.name}</p>
                                    <h5> price: <span>{product.price * count}</span></h5>
                                </div>
                                <div className='boughtitem'>
                                    <p>Frequently bought Together</p>
                                </div>
                                <div className='row my-10 justify-content-spaceBetween w-100'>
                                    <button className='cartBtn product_cart' onClick={handleClosePopUp}> Back to Shopping</button>
                                    <button className='cartBtn product_buy' onClick={() => navigate('/Cart')}> Proceed to Checkout </button>
                                </div>
                            </div>
                        </Modal>
                        <button className='cartBtn product_buy' onClick={() => setShowOutStock(true)}> Buy Now </button>
                        <Modal show={showOutStock} className='OutStock' footer={true} cancel='Back to shopping' handleClosePopUp={() => setShowOutStock(false)} title={'Oops...'}>
                            <h3>This item is out of stock</h3>
                        </Modal>
                    </div>
                </div>
            </div >
            <div className='container singleProductsLinks'>
                <div className='row LinksForDescription'>
                    <div className='col-3'>
                        <button> Top Selling Products </button>
                    </div>
                    <div className='col-7'>
                        <button onClick={() => setTab(tabs.DIS)} className={tab === tabs.DIS ? 'active' : ''}> Description </button>
                        <button onClick={() => setTab(tabs.REVIEWS)} className={tab === tabs.REVIEWS ? 'active' : ''}> reviews </button>
                        <button onClick={() => setTab(tabs.DELIVERY)} className={tab === tabs.DELIVERY ? 'active' : ''}> Delivery & Return Policy </button>
                    <div>
                        { tab === tabs.DIS && <Description /> }
                        { tab === tabs.REVIEWS && <Review /> }
                        { tab === tabs.DELIVERY && <Delivery /> }
                    </div>
                    </div>
                </div>
                <hr />
            </div >
        </div>
    );
}

export default SingleProduct;

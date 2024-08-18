import { useState } from 'react';
import t_shirt from '../../assets/img/whiteLogo.webp';
import siteData from '../../data';

const Footer = () => {
    const [email, setEmail] = useState('');

    console.log(siteData.footer);
    return (
        <footer className='footer'>
            <div className="container ">
                <div className="row justify-content-spaceBetween">
                    <div className="ft_des">
                        <h3> Subscribe to our NewsLetter </h3>
                        <p> Get all the latestest information, sales and Offers </p>
                    </div>
                    <div className="ft_Input">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button> SUBSCRIBE </button>
                    </div>
                </div>
                <br />
                <hr />
                <div className="row ft_info">
                    <div className="col-4">
                        <img src={t_shirt} alt="t-shirt" />
                        <h5>Hello T-squad</h5>
                    </div>
                    <div className="col-2">
                        <h4>CONTACT INFO</h4>
                        <p><span>Email:</span>support@t-store.in</p>
                    </div>
                    <div className="col-2 ft_About">
                        <h4>COMPANY</h4>
                        <ol>
                            {
                                siteData.footer.links.map(({ item, value }) => {
                                    return (
                                        <li key={value}><a href={value}>{item}</a></li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                    <div className="col-2 ft_login">
                        <h4>LOGIN</h4>
                        <ol>
                            <li> Login </li>
                            <li> Order History </li>
                            <li> My wishlist </li>
                            <li> Track Order </li>
                        </ol>
                    </div>
                </div>
                <div className='footer_foot text-align-center w-100'>
                    <h5> Copyright @2023 NYU Appreals | All Rights Reserved </h5>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartLink from '../../components/cart';

const Shipping = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !lastName || !street || !number) {
            return alert('Fill all the Information');
        }
        navigate('/payment')
    }
    return (
        <div className='shipping pdTop_80'>
            <CartLink />
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder='Enter your Name'
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    placeholder='Enter your Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label>Street</label>
                <input
                    type="text"
                    placeholder='Enter your street name'
                    onChange={(e) => setStreet(e.target.value)}
                />
                <div className='text-align-center'>
                    <label>Street No.</label>
                    <input type="number" onChange={(e) => setNumber(e.target.value)} />
                    <label>Apartment No.</label>
                    <input type="number" onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <label>City</label>
                <select name='city' id='city'>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="banglore">banglore</option>
                    <option value="hyderabad">hyderabad</option>
                    <option value="ahemdabad">ahemdabad</option>
                    <option value="chennai">chennai</option>
                    <option value="kolkata">kolkata</option>
                    <option value="amritsar">amritsar</option>
                    <option value="bhopal">bhopal</option>
                    <option value="bhubaneshwar">bhubaneshwar</option>
                    <option value="chandigarh">chandigarh</option>
                    <option value="jaipur">jaipur</option>
                    <option value="kochi">kochi</option>
                    <option value="lucknow">lucknow</option>
                    <option value="nagpur">nagpur</option>
                    <option value="kochi">kochi</option>
                    <option value="patna">patna</option>
                    <option value="ghaziabad">ghaziabad</option>
                    <option value="kanpur">kanpur</option>
                    <option value="mysore">mysore</option>
                    <option value="ajmer">ajmer</option>
                    <option value="surat">surat</option>
                </select>
                <input type="submit" className='shippingBtn' value='Continue' />
            </form>
        </div>
    );
}

export default Shipping;

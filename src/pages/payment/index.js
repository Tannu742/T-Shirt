import React, { useRef, useState } from 'react';
import CartLink from '../../components/cart';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    const errorEl = useRef(null);
    const [paymentState, setPaymentState] = useState({
        name: '',
        number: '',
        month: '',
        cvv: '',
        zipcode: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmpty = Object.values(paymentState).every(el => el !== '');
        if (!isEmpty) return errorEl.current.innerText = 'Fill all the Information';

        errorEl.current.innerText = '';
        navigate('/confirmation');

    }

    const handleInputChange = ({ target: { value, name } }) => {
        console.log(name);
        setPaymentState({ ...paymentState, [name]: value });
    }

    return (
        <div className='pdTop_120 payment'>
            <CartLink />
            <h2>Payment details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input
                    id='name'
                    type="text"
                    placeholder='Name'
                    onChange={handleInputChange}
                    name='name'
                    value={paymentState.name}
                />
                <label htmlFor='card'>Credit Card No.</label>
                <input
                    id='card'
                    type="number"
                    placeholder='1234 1234 1234 1234'
                    onChange={handleInputChange}
                    name='number'
                    value={paymentState.number}
                />
                <div>
                    <label htmlFor='exp_date'>Exp Date</label>
                    <input
                        id='exp_date'
                        type="month"
                        onChange={handleInputChange}
                        name='month'
                        value={paymentState.month}
                    />
                    <label htmlFor='cvv'>CVV</label>
                    <input
                        id='cvv'
                        type="text"
                        placeholder='***'
                        onChange={handleInputChange}
                        name='cvv'
                        value={paymentState.cvv}
                    />
                </div>
                <label htmlFor='zipcode'>Zip Code</label>
                <input
                    id='zipcode'
                    type="number"
                    placeholder='12345'
                    onChange={handleInputChange}
                    name='zipcode'
                    value={paymentState.zipcode}
                />
                <span ref={errorEl}></span>
                <input type="submit" value='Confirm Payment' className='paymentBtn' />
            </form>
        </div>
    );
}

export default Payment;

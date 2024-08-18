import React, { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfmPassword, setCfmPassword] = useState('');

    return (
        <div className='container  pdTop_120'>
            <div className='row'>
                <div className='signUp col-4 marginAuto text-align-center'>
                    <h3> Create an account. </h3>
                    <form className='FrmLoginBox'>
                        <input type="text" className='w-100' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}/>
                        <input type="email"  className="w-100"  placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password"  className="w-100"  placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <input type="password"  className="w-100"  placeholder='Confirm Password' onChange={(e) => setCfmPassword(e.target.value)} />
                        <div className='row w-100'>
                                <input type="checkbox" />
                                <span className='px-10'> By Signing up you agree to our terms and conditions.</span>
                        </div>
                        <input type="submit" className='LoginBtn' value='Create Account' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

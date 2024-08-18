import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container  pdTop_120'>
            <div className='row'>
                <div className='signIn col-5 marginAuto text-align-center'>
                    <h3> Login to your account </h3>
                    <form className='FrmLoginBox'>
                        <input type="email"  className="w-100" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password"  className="w-100" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <div className='row'>
                            <div className='col-5'>
                                <input type="checkbox" />
                                <span className='px-10'>Remember Me</span>
                            </div>
                            <div className='col-5 text-align-right px-10'>
                                <a href="#">Forget Password ?</a>
                            </div>
                        </div>
                        <input type="submit" className='LoginBtn' value='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

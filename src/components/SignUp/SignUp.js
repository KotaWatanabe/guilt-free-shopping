import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import { auth, handleUserProfile } from '../../firebase/utils';

import FormInput from '../Forms/Forminput/Forminput';
import Button from '../Forms/Button/Button';


const SignUp = props => {
    const [displayName,setDisplayName] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    const [confirmPassword,setConfirmPassword] =useState();
    const [errors,setErrors] =useState([]);

    const reset = () => {
        setDisplayName()
        setEmail()
        setPassword()
        setConfirmPassword()
        setErrors([])
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            const err = ['Password Dont\' match'];
            setErrors(err);
            return 
        }

        try {
            
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName });
            reset();
            props.history.push('/products')

        } catch (err) {
            console.log(err);            
        }
    }
    return (
        <div className="signup">
            <div className="wrap">
                <h2>
                    SignUp
                </h2>
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}
                <div className="formWrap">
                    <form onSubmit={handleFormSubmit}>
                        <FormInput 
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Full name"
                            handleChange={e => setDisplayName(e.target.value)}
                        />
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange={e => setEmail(e.target.value)}
                        />
                        <FormInput 
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            handleChange={e => setPassword(e.target.value)}
                        />
                        <FormInput 
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            handleChange={e => setConfirmPassword(e.target.value)}
                        />
                        <Button type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default withRouter(SignUp);

import React, { useState } from 'react'
import './styles.scss'
import Button from '../Forms/Button/Button';
import FormInput from '../Forms/Forminput/Forminput'
import { withRouter } from 'react-router-dom';

import { signInWithGoogle, auth } from '../../firebase/utils';

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            
            await auth.signInWithEmailAndPassword(email, password);
            resetForm();
            // props.history.push('/products')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="signin">
            <div className="wrap">
                <h2>
                    LogIn
                </h2>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <FormInput 
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={e =>setPassword(e.target.value)}
                        />
                        <Button type="submit" style={{backgroundColor:'#ff9a9e'}}>
                            Login
                        </Button>
                        <div className="socialSignin">
                            <div className="row">
                                <Button onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignIn);

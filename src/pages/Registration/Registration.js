import React, { Component } from 'react'
import Signup from '../../components/SignUp/SignUp'
import './styles.scss'

export default class Registration extends Component {
    render() {
        return (
            <div className="registration">
                <Signup />
            </div>
        ) 
    }
}

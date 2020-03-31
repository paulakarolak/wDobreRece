import React, { Component } from 'react';
import HeaderAlt from './HeaderAlt';
import LoginForm from './LoginForm';

export default class LoginPage extends Component {
    render() {
        return (
            <>
                <HeaderAlt />
                <LoginForm />
            </>
        )
    }
}

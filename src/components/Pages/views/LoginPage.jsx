import React, { Component } from 'react';
import './styles/LoginPage.css';

export default class LoginPage extends Component{
    render(){
        return(
            <div>
                <div className='LoginPage'>
                    <div className='Login'>Login: </div><br/>
                    <label className='label'>Username: </label>
                    <input className='input' id='username' type='text'/>
                    <br/>
                    <br/>
                    <label className='label'>Password: </label>
                    <input className='input' id='password' type='text'/>
                    <br/>
                    <br/>
                    <button className='button'>Login</button>
                </div>
            </div>
        );
    }
}
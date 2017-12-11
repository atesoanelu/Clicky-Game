import React, { Server } from 'react';
import logo from './logo.svg';
import './style.css';
class User {
    constructor(username, email) {
        console.log('getting created');
        this.username = username;
        this.email = email;
        this.isLoggedIn = false;
    }

    login() {
        
        this.isLoggedIn = true;
    }
}



let user = new User('Smith', 'Smith.com');
console.log('is the user currently logged in', user.isLoggedIn);
user.login();
console.log('is the user currently logged in', user.isLoggedIn);

console.log('done');

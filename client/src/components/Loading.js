import React from 'react';
import logo from '../img/logo.svg';
import '../scss/scssComponents/Loading.scss';

function Loading() {
    return (
        <img className='loading-form' src={logo} alt="logo" />
    );
}

export default Loading;
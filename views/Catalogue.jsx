import React from 'react';
//  Personal Components
import Movies from '../models/Movies';
import Series from '../models/Series';
//import NavBar from './NavBar';

const Catalogue = () => {
    return(
        <>
            <Movies/>
            <Series/>
        </>
    )
}

export default Catalogue;
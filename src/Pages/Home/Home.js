import React from 'react';
import Menu from '../Header/Menu/Menu';
import Review from '../Header/Review/Review';
import Topbanner from '../Header/Topbanner';

const Home = () => {
    return (
        <div>
            <Topbanner/>
            <Menu/>
            <Review/>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu/Menu';
import Review from '../Header/Review/Review';
// import Slider from '../Header/Slider/Slider';
import Topbanner from '../Header/Topbanner';

const Home = () => {
    return (
        <div>
            <Topbanner/>
            <Menu/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;
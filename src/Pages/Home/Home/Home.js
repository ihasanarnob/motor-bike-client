import React from 'react';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';
import PostedReviews from '../PostedReviews/PostedReviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Accessories></Accessories>
            <Services></Services>
            <PostedReviews></PostedReviews>
        </div>
    );
};

export default Home;
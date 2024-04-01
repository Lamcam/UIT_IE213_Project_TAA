import React from 'react';
import SaleSection from 'components/home_coponent/SaleSection';
import './home.css';
import InfoSection from 'components/home_coponent/InfoSection';
import QuestionSection from 'components/home_coponent/QuestionSection';
import HomeCarousel from 'components/home_coponent/HomeCarousel';
import ImgSection from 'components/home_coponent/ImgSection';
const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <SaleSection></SaleSection>
            <QuestionSection></QuestionSection>
            <InfoSection></InfoSection>
            <ImgSection></ImgSection>
        </div>
    );
};

export default Home;
import React from 'react';
import SaleSection from '@components/Home_coponent/SaleSection';
import './home.css';
import InfoSection from '@components/Home_coponent/InfoSection';
import QuestionSection from '@components/Home_coponent/QuestionSection';
import HomeCarousel from '@components/Home_coponent/HomeCarousel';
import ImgSection from '@components/Home_coponent/ImgSection';
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
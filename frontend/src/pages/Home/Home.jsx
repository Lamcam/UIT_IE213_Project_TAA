import React from 'react';
import SaleSection from 'components/HomeComponents/SaleSection';
import './Home.scss';
import InfoSection from 'components/HomeComponents/InfoSection';
import QuestionSection from 'components/HomeComponents/QuestionSection';
import HomeCarousel from 'components/HomeComponents/HomeCarousel';
import ImgSection from 'components/HomeComponents/ImgSection';
import HotProducts from 'components/HomeComponents/HotProducts';

const Home = () => {
    return (
        <div className='HomePage' >
            <HomeCarousel></HomeCarousel>
            <HotProducts></HotProducts> 
            <SaleSection></SaleSection>
            <QuestionSection></QuestionSection>
            <InfoSection></InfoSection>
            <ImgSection></ImgSection>
        </div>
    );
};

export default Home;

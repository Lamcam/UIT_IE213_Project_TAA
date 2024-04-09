import React from 'react';
import SaleSection from 'components/HomeComponents/SaleSection';
import './Home.scss';
import InfoSection from 'components/HomeComponents/InfoSection';
import QuestionSection from 'components/HomeComponents/QuestionSection';
import HomeCarousel from 'components/HomeComponents/HomeCarousel';
import ImgSection from 'components/HomeComponents/ImgSection';
import PreviewCard from '@components/HomeComponents/HotProducts';

const Home = () => {
    return (
        <div>
            <PreviewCard></PreviewCard>
            <HomeCarousel></HomeCarousel>
            <SaleSection></SaleSection>
            <QuestionSection></QuestionSection>
            <InfoSection></InfoSection>
            <ImgSection></ImgSection>
        </div>
    );
};

export default Home;

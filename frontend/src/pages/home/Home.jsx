import React from 'react';
import SaleSection from 'components/home_coponent/saleSection';
import './home.css';
import InfoSection from 'components/home_coponent/InfoSection';
import QuestionSection from 'components/home_coponent/QuestionSection';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home page!</h1>
            <SaleSection></SaleSection>
            <InfoSection></InfoSection>
            <QuestionSection></QuestionSection>
        </div>
    );
};

export default Home;
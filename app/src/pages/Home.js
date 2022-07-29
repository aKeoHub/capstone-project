import React from 'react';
import Cards from '../components/Card/Cards';
import HeroSection from '../components/HeroSection/HeroSection';
import DandFSection from '../components/DandFSection/DandFSection';

function Home() {
    return(
        <>
            <HeroSection />
            <Cards />
            <DandFSection />

        </>
    )
}

export default Home;
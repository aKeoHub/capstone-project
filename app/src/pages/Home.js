import React from 'react';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import DandFSection from '../components/DandFSection';
import Footer from '../components/Footer';
function Home() {
    return(
        <>
            <HeroSection />
            <Cards />
            <DandFSection />
            <Footer />
        </>
    )
}

export default Home;
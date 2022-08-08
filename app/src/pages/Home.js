import React from 'react';
import Cards from '../components/Card/Cards';
import HeroSection from '../components/HeroSection/HeroSection';
import DandFSection from '../components/DandFSection/DandFSection';

/**
 * Loads all the components to the home page.
 * @returns {JSX.Element}
 * @constructor
 * @author Marek Lichwa
 */
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
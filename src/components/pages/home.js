import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../hero';
import About from '../about';


function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Cards />
        </>
    )

}

export default Home;
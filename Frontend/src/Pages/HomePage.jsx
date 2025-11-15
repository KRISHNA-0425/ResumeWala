import React from 'react'
import Hero from '../Components/Home/Hero'
import Features from '../Components/Home/Features'
import Testimonials from '../Components/Home/Testimonials'
import Footer from '../Components/Home/Footer'

const HomePage = () => {
    return (
        <>
            <div className='h-screen '>
                {/* <Banner /> */}
                <Hero />
                <Features/>
                <Testimonials/>
                <Footer/>
            </div >
        </>
    )
}

export default HomePage
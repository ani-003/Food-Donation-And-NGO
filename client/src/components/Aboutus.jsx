import React, { useEffect, useState } from 'react'

import './style/Aboutus.css'
import CountUp from 'react-countup';
const hero = 'image/hero.jpg'

function Aboutus() {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, options);

        const target = document.querySelector('.section-id');  // Corrected selector
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);



    return (
        <>

            <div className="hero">
                {/* <img src={hero} alt="Hero" /> */}
                <div className="hero-content">
                    <h1>join The Movement To Not Sleep Hungry</h1>
                    <p>Some compelling text describing your website or product.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='about'>
                <h1 className='about-head'>Our Mission</h1>
                <p className='about-content'>
                    At Lef-Lif, we are on a mission to reduce food wastage and ensure that no one goes hungry. Every day, tons of edible food are discarded, while millions of people struggle to find their next meal. We believe that this imbalance can be corrected, and we’re committed to making a difference.
                </p>
            </div>
            <div className='about'>
                <h1 className='about-head'>Our Vision</h1>
                <p className='about-content'>
                    We envision a future where every person—regardless of their circumstances—has access to nutritious food. By rescuing surplus food and distributing it to those in need, we aim to create a more equitable and sustainable food system.
                </p>
            </div>
            <div className='about'>
                <h1 className='about-head'>Who We Are</h1>
                <p className='about-content'>
                    Founded in 2023, Lef-Lif is a passionate team of volunteers, donors, and community partners. Together, we work tirelessly to bridge the gap between food surplus and food scarcity. Our efforts extend beyond just providing meals; we believe in nourishing both bodies and spirits.
                </p>
            </div>
            <div className='about'>
                <h1 className='about-head'>Our Impact</h1>
                <p className='about-content'>
                    Through our food recovery programs, we have:

                    Rescued over 100,000 pounds of food from restaurants, markets, and events.
                    Distributed meals to shelters, schools, and low-income families.
                    Supported local farmers by redirecting excess produce.
                </p>
            </div>


            <div className='tag'>
                <h4 className='tag-head'>Total Donations</h4>
                <div className='tag-no'><CountUp
                    className="account-balance"
                    start={0}
                    end={45000}
                    duration={3}
                    useEasing={true}
                    separator=","
                />Kg</div>
            </div>
            <div className='tag'>
                <h4 className='tag-head'>Total Donors</h4>
                <div className='tag-no'><CountUp
                    className="account-balance"
                    start={0}
                    end={500}
                    duration={3}
                    useEasing={true}
                    separator=","
                />M</div>
            </div>
            <div className='tag'>
                <h4 className='tag-head'>Happy Faces</h4>
                <div className='tag-no'><CountUp
                    className="account-balance"
                    start={0}
                    end={800}
                    duration={3}
                    useEasing={true}
                    separator=","
                />M</div>
            </div>



            <div className='about'>
                <h1 className='about-head'>Meet Our Team</h1>
                <p className='about-content'>
                    Sarah Johnson (Founder): Inspired by witnessing food waste firsthand, Sarah started FoodCare. Her dedication drives our mission forward.
                    David Martinez (Volunteer Coordinator): David ensures that our volunteer network remains engaged and committed.
                    Maria Rodriguez (Community Outreach): Maria connects with local businesses and organizations to strengthen our impact.
                </p>
            </div>
            <div className='about'>
                <h1 className='about-head'>Join Us!</h1>
                <p className='about-content'>
                    Ready to make a difference? Whether you want to volunteer, donate, or spread the word, there’s a place for you at FoodCare. Together, we can turn surplus into sustenance and build a more compassionate world.

                    Thank you for being part of our journey! 🌟🍽️

                    Feel free to customize this content to reflect your NGO’s unique story and voice. Add visuals, photos, and testimonials to make it even more engaging. Remember, authenticity and passion are key! If you need further assistance or have specific details you’d like to include, feel free to ask. 😊

                    By the way, have you thought about a catchy tagline for your NGO? It can leave a lasting impression! 🙌🏼

                    I’ve crafted an engaging and informative “About Us” section for your NGO website. If you’d like any adjustments or additional details, feel free to ask! 🎉
                </p>
            </div>
        </>
    )
}

export default Aboutus

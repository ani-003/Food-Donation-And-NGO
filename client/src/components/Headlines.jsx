
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

import './css/Headlines.css';

const Headlines = () => {
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
    }, []);
  return (
    <div className="headlines-container container h-auto col-lg-8 col-md-6 col-sm-12 ">
     <div className="heading mt-2">
      <h2 style={{ color: '#4CAF50', fontWeight: '800', marginTop:'0px' }}>Headlines of the Week</h2></div>
      <div className="stats-box">
        <div>
          <p>Total Donations</p>
          <p><CountUp
                    className="account-balance"
                    start={44900}
                    end={45000}
                    duration={500}
                    useEasing={true}
                    separator=","
                /></p>
        </div>
        <div>
          <p>Meals Served</p>
          <p><CountUp
                    className="account-balance"
                    start={69800}
                    end={70000}
                    duration={3}
                    useEasing={true}
                    separator=","
                /></p>
        </div>
        <div>
          <p>Children Fed</p>
          
        
          <p><CountUp
                    className="account-balance"
                    start={7500}
                    end={12000}
                    duration={3}
                    useEasing={true}
                    separator=","
                /></p>
        </div>
      </div>
    </div>
  );
}

export default Headlines;

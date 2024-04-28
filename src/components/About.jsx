import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function About() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className='about_design'>
            <div className='about_design_inner'>
            <h2>TESTIMONIALS</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          

                <Carousel
                    infinite={true}
                    autoPlay={true}
                    swipeable={true}

                    responsive={responsive}>
                        
                    <div><img src='/Images/Galapagos-Islands-Ecuador.jpg' /></div>
                    <div><img src='/Images/Nantucket-National-Wildlife-Refuge-United-States.jpg' /></div>

                </Carousel>;
            
        </div>
    )
}

export default About

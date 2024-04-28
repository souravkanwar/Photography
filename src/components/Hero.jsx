import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Hero() {
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
    <div className='hero'>
      <div className='header'>
        <div>
          <h1>DINESHGAHLOT.COM</h1>
        </div>
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>PORTFOLIO</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>TESTIMONIALS</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
        
      </div>
      
      
    <Carousel 
  infinite={true}
  swipeable={true}

    responsive={responsive}>
      
      <div><img src='/Images/Masai-mara-Kenya-.jpg'/>
      <div className='hero_text'>
        <p>Photography For <br/>Adventurous Souls &<br/> Rebels At Heart</p>
        <button>Read More</button>
      </div>
      </div>
      <div><img src='/Images/Nantucket-National-Wildlife-Refuge-United-States.jpg'/>
      <div className='hero_text'>
        <p>Photography For <br/>Adventurous Souls &<br/> Rebels At Heart</p>
        <button>Read More</button>
      </div>
      </div>

    </Carousel>
    
    </div>
  );
}
  
export default Hero

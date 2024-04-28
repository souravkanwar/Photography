import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Animals() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <div className='animal'>
      <Carousel 
      infinite={true}
      autoPlay={true}
      swipeable={true}
      responsive={responsive}>
        
        <div className='animal_inner'><img src='/public/Images/Central-Kalahari-Game-Reserve-Botswana.jpg'/></div>
        <div className='animal_inner'><img src='/public/Images/Denali-National-Park-Preserve-Alaska.jpg'/></div>
        <div className='animal_inner'><img src='/public/Images/Galapagos-Islands-Ecuador.jpg'/></div>
        <div className='animal_inner'><img src='/public/Images/Nantucket-National-Wildlife-Refuge-United-States.jpg'/></div>
        <div className='animal_inner'><img src='/public/Images/Masai-mara-Kenya-.jpg'/></div>
        <div className='animal_inner'><img src='/public/Images/Pantanal-Brazil.jpg'/></div>
      </Carousel>;
    </div>
    
  )
}

export default Animals

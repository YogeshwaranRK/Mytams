import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function MovingCard() {
    return (
        <div className="relative">
            <div className="absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            showLegend={false}
            interval={3000}>

<div>
                    <img src="https://www.hybridshopping.in/image/cache/catalog/slider%201-1680x500.jpg" alt="sad" />
                    
                </div>
                <div>
                    <img src="https://www.hybridshopping.in/image/cache/catalog/slider%202-1680x500.jpg" alt="sad" />
                   
                </div>
                <div>
                    <img src="https://www.hybridshopping.in/image/cache/catalog/slider%203-1680x500.jpg" alt="sad" />
        
                </div>

            </Carousel>
            
        </div>
    )
}

export default MovingCard

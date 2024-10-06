import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Hero = () => {
  return (
    <div>
       
   {/* Hero Section */}
   <section className="container mx-auto py-1 px-4 relative z-10">
        <div className="mb-12 mt-11">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={5000}>
            <div>
              <img
                src="/assets/image1.jpeg"
                className="w-full h-[500px]  rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="/assets/image2.jpeg"
                alt="Laborers on the field"
                className="w-full h-[500px]  rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="/assets/image3.jpeg"
                className="w-full h-[500px]  rounded-lg shadow-lg"
              />
            </div>
          </Carousel>

          <div className="text-center mt-10 mb-12">
            <h1 className="text-5xl font-extrabold mb-4 text-black">Helping Laborers, Changing Lives</h1>
            <p className="text-lg text-gray-700 mx-auto max-w-3xl">
              Karigar Foundation is committed to supporting laborers in every way. We provide assistance in resolving workplace challenges, ensuring fair treatment, and securing their rights. We are here for laborers, no matter the issue.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero

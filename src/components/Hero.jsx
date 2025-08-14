import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-8">
      <div className="mb-10 lg:mb-16">
        {/* Custom Carousel Wrapper */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            showStatus={false} 
            showIndicators={true}
            interval={5000}
            transitionTime={600}
            swipeable={true}
            emulateTouch={true}
            className="hero-carousel"
          >
            <div className="relative">
              <img 
                src="/assets/image1.jpeg" 
                alt={t('hero_image1_alt')} 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="relative">
              <img 
                src="/assets/image2.jpeg" 
                alt={t('hero_image2_alt')} 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="relative">
              <img 
                src="/assets/image3.jpeg" 
                alt={t('hero_image3_alt')} 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </Carousel>
        </div>

        {/* Hero Content */}
        <div className="text-center mt-8 lg:mt-12 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 lg:mb-6 text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
              {t('hero_title1')}
            </span>
            <br className="hidden sm:block" />
            <span className="text-gray-900"> {t('hero_title2')}</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-700 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mx-auto max-w-4xl leading-relaxed font-medium">
            {t('hero_description')}
          </p>
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 lg:mt-10">
            <button className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {t('hero_learn_more')}
            </button>
            <button className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              {t('hero_get_involved')}
            </button>
          </div>
        </div>
      </div>

      {/* Custom Carousel Styles */}
      <style jsx>{`
        .hero-carousel .carousel .control-dots .dot {
          background: rgba(255, 255, 255, 0.4) !important;
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .hero-carousel .carousel .control-dots .dot.selected {
          background: #ffffff !important;
          transform: scale(1.2) !important;
        }
        
        .hero-carousel .carousel .control-next.control-arrow:before,
        .hero-carousel .carousel .control-prev.control-arrow:before {
          border-top: 12px solid transparent !important;
          border-bottom: 12px solid transparent !important;
        }
        
        .hero-carousel .carousel .control-next.control-arrow:before {
          border-left: 18px solid rgba(255, 255, 255, 0.8) !important;
        }
        
        .hero-carousel .carousel .control-prev.control-arrow:before {
          border-right: 18px solid rgba(255, 255, 255, 0.8) !important;
        }
        
        .hero-carousel .carousel .control-arrow {
          background: rgba(0, 0, 0, 0.2) !important;
          border-radius: 50% !important;
          width: 50px !important;
          height: 50px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        
        .hero-carousel .carousel .control-arrow:hover {
          background: rgba(0, 0, 0, 0.4) !important;
        }
        
        @media (max-width: 768px) {
          .hero-carousel .carousel .control-arrow {
            width: 40px !important;
            height: 40px !important;
          }
          
          .hero-carousel .carousel .control-next.control-arrow:before {
            border-left: 14px solid rgba(255, 255, 255, 0.8) !important;
          }
          
          .hero-carousel .carousel .control-prev.control-arrow:before {
            border-right: 14px solid rgba(255, 255, 255, 0.8) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
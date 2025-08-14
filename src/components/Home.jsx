import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ProjectsSection from './ProjectsSection';
import SuccessStories from './SuccessStories';
import Hero from './Hero';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="relative bg-white min-h-screen overflow-hidden">
      <Hero />
      
      {/* How We Help Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-300 rounded-full opacity-40 animate-bounce"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4 block">
                Our Impact
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  How We Help
                </span>
                <br />
                <span className="text-gray-900">Laborers</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Transforming lives through sustainable solutions and community empowerment
              </p>
            </div>
          </div>
          
          {/* Projects with Enhanced Styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative p-6 lg:p-12">
              <ProjectsSection />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - More Dynamic */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="enhanced-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#enhanced-grid)" className="text-white"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Floating Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90 uppercase tracking-widest">
                Make a Difference Today
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white leading-tight">
              Be a{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                Lifeline
              </span>
              <br />
              for Laborers
            </h2>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              {t('laborers_need_your_support')}
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/donate"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-5 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative flex items-center">
                  <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {t('donate_now')}
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link
                to="/about"
                className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <span className="flex items-center">
                  Learn More
                  <svg className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories with Enhanced Styling */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-900/10 to-transparent"></div>
        <SuccessStories />
      </section>

      {/* Mission & Vision Section - Redesigned */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
              Our Foundation
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-gray-900">{t('welcome')}</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
            </div>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t('home_description')}
            </p>
          </div>
          
          {/* Mission & Vision Cards - Redesigned */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {t('mission_title')}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  {t('mission_description')}
                </p>
                <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {t('vision_title')}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  {t('vision_description')}
                </p>
                <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Decorative Element */}
          <div className="flex justify-center mt-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
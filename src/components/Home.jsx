import React from 'react';

import ProjectsSection from './ProjectsSection';
import SuccessStories from './SuccessStories';
import Hero from './Hero';

function Home() {
  return (
    <main className="relative bg-gray-100 pt-1">
      {/* Hero Section */}
     <Hero/>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">How We Help Laborers</h2>
        <ProjectsSection />
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-100 py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Be a Lifeline for Laborers</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Laborers need your support to navigate the challenges they face every day. Help us ensure that no laborer is left behind. Every donation goes directly toward providing aid and services to those who need it most.
          </p>
          <a
            href="#donate"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 text-lg font-semibold"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />
    </main>
  );
}

export default Home;

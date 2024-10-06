import React from 'react';
import SuccessStories from './SuccessStories'

function Impact() {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Our Impact for Laborers</h1>

      {/* Laborers' Support Section */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Direct Support for Laborers</h2>
        <p className="text-gray-700 mb-4">
          Karigar Foundation is committed to transforming the lives of laborers by providing critical support. Whether it's fair wages, healthcare access, or legal assistance, our mission is to stand by their side.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Assisted 1,000 laborers in securing fair wages</li>
          <li>Healthcare support for over 500 laborers</li>
          <li>Legal help to 300+ laborers facing exploitation</li>
        </ul>
        <img 
          src="https://mrida.co/cdn/shop/articles/Karigar_ki_kahaniya_copy_02.jpg?v=1722700296" 
          alt="Laborer Support" 
          className="w-full h-60 object-cover rounded-lg mb-4" 
        />
        <a href="/laborer-support" className="inline-block text-blue-600 font-medium hover:text-blue-800 transition duration-300 underline">Learn More About Our Work</a>
      </section>

      {/* Success Stories Section */}
      <SuccessStories/>

      {/* Laborer Outreach Section */}
      <section className="mb-8 bg-yellow-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-yellow-700 mb-4">Laborer Outreach Programs</h2>
        <p className="text-gray-700 mb-4">
          Karigar Foundation extends its efforts to reach laborers in need through various outreach programs. We focus on educating them about their rights, providing healthcare, and offering emergency assistance.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Organized 50+ legal awareness camps for laborers</li>
          <li>Healthcare checkups for over 700 laborers</li>
          <li>Emergency support programs reaching 800 laborer families</li>
        </ul>
        <img 
          src="https://ngofeed.com/wp-content/uploads/2024/04/NGO-in-Consumer-Protection.jpg" 
          alt="Laborer Outreach" 
          className="w-full h-60 object-cover rounded-lg mb-4" 
        />
        <a href="/laborer-outreach" className="inline-block text-yellow-600 font-medium hover:text-yellow-800 transition duration-300 underline">Learn More About Our Outreach</a>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How You Can Help</h2>
        <p className="text-gray-700 mb-4">
          Make a real difference in the lives of laborers. Your support helps provide legal aid, healthcare, and essential resources to those in need. Get involved today.
        </p>
        <a href="/get-involved" className="inline-block text-gray-600 font-medium hover:text-gray-800 transition duration-300 underline">Learn How to Get Involved</a>
      </section>

      {/* Recent Achievements Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Recent Achievements</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
              <span className="text-xl font-bold">1.2K+</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Laborers Assisted</h3>
              <p className="text-gray-600">We have provided direct support to over 1,200 laborers through legal aid, healthcare, and emergency assistance programs.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full">
              <span className="text-xl font-bold">900+</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Families Supported</h3>
              <p className="text-gray-600">Over 900 laborer families have received essential support through our outreach and emergency assistance initiatives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;

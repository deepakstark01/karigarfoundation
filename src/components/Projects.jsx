import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const iconFor = (key) => {
  const map = {
    legal_aid: '⚖️',
    emergency: '⛑️',
    education: '📚',
    women_child: '👩‍👧',
    health: '🏥',
    livelihoods: '🧵',
    agri_env: '🌱',
    culture_sports: '🎭'
  };
  return map[key] || '✅';
};

// safe array reader for i18n
const useArr = (t, key) => {
  const v = t(key, { returnObjects: true, defaultValue: [] });
  if (Array.isArray(v)) return v;
  if (v && typeof v === 'object') return Object.values(v);
  return [];
};

const Projects = () => {
  const { t } = useTranslation();

  // from Redux (existing)
  const { title, project } = useSelector((state) => state.project);

  // from i18n (new, detailed categories)
  const categories = useArr(t, 'projects_page.categories');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-white transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block border-2 border-white px-6 py-3 mb-8">
              <span className="text-sm font-bold uppercase tracking-widest">Our Impact</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight uppercase tracking-wide">
              {t('projects_page.title')}
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-1 bg-white"></div>
              <div className="w-4 h-4 bg-white mx-6 transform rotate-45"></div>
              <div className="w-24 h-1 bg-white"></div>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              {t('projects_page.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Programs (Redux) */}
      {Array.isArray(project) && project.length > 0 && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wider text-black">
                {t(title)}
              </h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transforming lives through targeted interventions and sustainable solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
              {project.map((item, index) => (
                <article
                  key={item.id}
                  className="group relative bg-white border-2 border-black hover:border-gray-400 transition-all duration-500"
                >
                  {/* Project Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white flex items-center justify-center font-black text-lg z-10">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={t(item.name)}
                      className="w-full aspect-[4/3] object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500"></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-black group-hover:text-gray-700 transition-colors duration-300">
                      {t(item.name)}
                    </h3>
                    <div className="w-16 h-1 bg-black mb-4 group-hover:w-24 transition-all duration-300"></div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{t(item.description)}</p>

                    {item.details && (
                      <details className="text-sm text-gray-700 group">
                        <summary className="cursor-pointer font-bold text-black uppercase tracking-wide hover:text-gray-600 transition-colors duration-300 list-none">
                          <span className="flex items-center">
                            {t('read_more', { defaultValue: 'Read more' })}
                            <svg className="ml-2 w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="mt-4 pt-4 border-t border-gray-200 leading-relaxed text-gray-600">
                          {item.details}
                        </div>
                      </details>
                    )}
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-black transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programs & Focus Areas */}
      <section className="py-20 lg:py-32 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0"
          style={{
              backgroundImage: `url("/assets/labour.png")`,
              backgroundRepeat: 'repeat'
            }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wider text-black">
              {t('how_we_help_laborers')}
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support across multiple domains for holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <article
                key={idx}
                className="group bg-white border-l-4 border-black p-8 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 relative"
              >
                {/* Category Number */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-black flex items-center justify-center text-xs font-black">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-black flex items-center justify-center text-2xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {iconFor(cat.key)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black uppercase tracking-wider text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <div className="w-12 h-1 bg-black group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{cat.desc}</p>
                
                {Array.isArray(cat.bullets) && cat.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {cat.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300">
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80 group-hover:opacity-100">
                  Projects Completed
                </div>
              </div>
            </div>
            <div className="group">
              <div className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300">
                <div className="text-4xl font-black mb-2">10K+</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80 group-hover:opacity-100">
                  Lives Impacted
                </div>
              </div>
            </div>
            <div className="group">
              <div className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300">
                <div className="text-4xl font-black mb-2">50+</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80 group-hover:opacity-100">
                  Communities
                </div>
              </div>
            </div>
            <div className="group">
              <div className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300">
                <div className="text-4xl font-black mb-2">8</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80 group-hover:opacity-100">
                  Focus Areas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white border-t-4 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-black mb-8 uppercase tracking-wider text-black">
            Ready to Make an Impact?
          </h3>
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <Link
              to="/contact"
              className="group border-2 border-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                {t('contact')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Link>
            
            <Link
              to="/donate"
              className="group bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                {t('donate_now')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
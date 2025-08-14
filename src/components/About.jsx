import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();

  // Safely read array-like translations (falls back to [])
  const getArr = (key) => {
    const v = t(key, { returnObjects: true, defaultValue: [] });
    if (Array.isArray(v)) return v;
    if (v && typeof v === 'object') return Object.values(v);
    return [];
  };

  const values = getArr('about_page.values.items');
  const whatWeDo = getArr('about_page.whatWeDo.items');
  const approach = getArr('about_page.approach.items');
  const stats = getArr('about_page.impact.stats');
  const timeline = getArr('about_page.timeline.items');
  const team = getArr('about_page.team.members');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

        {/* ✅ Token-safe pattern background via inline style */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("./assets/cover.jpeg")`, // Use a valid path to your pattern image
              backgroundRepeat: 'repeat'
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
              {t('about')}
            </h1>
            <div className="w-24 h-1 bg-white mb-8" />
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300 leading-relaxed max-w-3xl">
              {t('about_page.lead')}
            </p>
          </div>
        </div>

        {/* Geometric Accent */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5" aria-hidden="true">
          <div className="w-full h-full border-4 border-white rotate-45 translate-x-32 translate-y-32" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Mission */}
            <div className="order-2 lg:order-1">
              <div className="bg-black text-white p-8 lg:p-12 relative">
                <div className="absolute top-0 left-0 w-16 h-16 bg-white -translate-x-4 -translate-y-4" />
                <h2 className="text-2xl lg:text-3xl font-black mb-6 uppercase tracking-wider">
                  {t('about_page.mission.title')}
                </h2>
                <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-300">
                  {t('about_page.mission.desc')}
                </p>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-white translate-x-2 translate-y-2" />
              </div>
            </div>

            {/* Vision */}
            <div className="order-1 lg:order-2">
              <div className="bg-white border-4 border-black p-8 lg:p-12 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-black translate-x-4 -translate-y-4" />
                <h2 className="text-2xl lg:3xl font-black mb-6 uppercase tracking-wider text-black">
                  {t('about_page.vision.title')}
                </h2>
                <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-700">
                  {t('about_page.vision.desc')}
                </p>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-black -translate-x-2 translate-y-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      {values.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wider text-black">
                {t('about_page.values.title')}
              </h3>
              <div className="w-24 h-1 bg-black mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {values.map((v, i) => (
                <div key={i} className="group">
                  <span className="inline-block px-6 py-3 bg-white border-2 border-black text-black text-sm lg:text-base font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Do */}
      {whatWeDo.length > 0 && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-3xl lg:text-5xl font-black mb-8 uppercase tracking-wider text-black leading-tight">
                  {t('about_page.whatWeDo.title')}
                </h3>
                <div className="w-24 h-2 bg-black mb-8" />
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transforming lives through comprehensive support and sustainable solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {whatWeDo.map((item, idx) => (
                  <div key={idx} className="group border-l-4 border-black pl-6 py-4 hover:border-gray-400 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-sm group-hover:bg-gray-600 transition-all duration-300">
                        {idx + 1}
                      </div>
                      <p className="text-base lg:text-lg text-gray-800 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Approach */}
      {approach.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl lg:text-3xl font-black mb-6 uppercase tracking-wider text-black">
              {t('about_page.approach.title')}
            </h3>
            <ol className="space-y-3">
              {approach.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-black flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <p className="text-gray-800">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Impact Stats */}
      {stats.length > 0 && (
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wider">
                {t('about_page.impact.title')}
              </h3>
              <div className="w-24 h-1 bg-white mx-auto" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="border-2 border-white p-6 lg:p-8 hover:bg-white hover:text-black transition-all duration-300">
                    <div className="text-3xl lg:text-5xl font-black mb-2">
                      {s?.number ?? ''}
                    </div>
                    <div className="text-sm lg:text-base uppercase tracking-wider font-medium opacity-80 group-hover:opacity-100">
                      {s?.label ?? ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline */}
      {timeline.length > 0 && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wider text-black">
                {t('about_page.timeline.title')}
              </h3>
              <div className="w-24 h-1 bg-black mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black" />
                <div className="space-y-12">
                  {timeline.map((tItem, idx) => (
                    <div key={idx} className="relative flex items-start">
                      <div className="absolute left-6 w-4 h-4 bg-black border-4 border-white shadow-lg" />
                      <div className="ml-20">
                        <div className="bg-black text-white inline-block px-4 py-2 mb-4">
                          <span className="font-black text-lg uppercase tracking-wider">
                            {tItem?.year ?? ''}
                          </span>
                        </div>
                        <div className="bg-gray-50 border-l-4 border-black p-6">
                          <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                            {tItem?.text ?? ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {team.length > 0 && (
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-wider text-black">
                {t('about_page.team.title')}
              </h3>
              <div className="w-24 h-1 bg-black mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {team.map((m, i) => (
                <div key={i} className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto border-4 border-black overflow-hidden relative rounded-full">
                      <img
                        src={m?.img || '/assets/placeholder.jpg'}
                        alt={m?.name || 'Team member'}
                        className="w-full h-full object-cover transition-all duration-500 rounded-full"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 rounded-full" />
                    </div>
                  </div>
                  <div className="bg-white border-2 border-black p-4">
                    <h4 className="text-xl font-black uppercase tracking-wider text-black mb-2">
                      {m?.name ?? ''}
                    </h4>
                    <p className="text-sm uppercase tracking-wider text-gray-600 font-medium">
                      {m?.role ?? ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partners */}
      <section className="py-16 bg-white border-t-4 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-black mb-4 uppercase tracking-wider text-black">
              {t('about_page.partners.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('about_page.partners.desc')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['NHM', 'Labour Dept.', 'Local NGOs', 'CSR Partners'].map((partner, idx) => (
              <div key={idx} className="border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">
                <span className="font-bold uppercase tracking-wider text-sm">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-gray-900" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl lg:text-5xl font-black mb-8 uppercase tracking-wider">
            Join Our Mission
          </h3>
          <div className="w-24 h-1 bg-white mx-auto mb-12" />

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <Link
              to="/get-involved"
              className="group border-2 border-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                {t('about_page.cta.join')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              to="/donate"
              className="group bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                {t('about_page.cta.donate')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Geometric Accent */}
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5" aria-hidden="true">
          <div className="w-full h-full border-8 border-white -rotate-12 -translate-x-48 translate-y-48" />
        </div>
      </section>
    </div>
  );
};

export default About;

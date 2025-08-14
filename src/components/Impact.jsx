// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';

// const useArr = (t, key) => {
//   const v = t(key, { returnObjects: true, defaultValue: [] });
//   if (Array.isArray(v)) return v;
//   if (v && typeof v === 'object') return Object.values(v);
//   return [];
// };

// function Impact() {
//   const { t } = useTranslation();

//   const kpis        = useArr(t, 'impact_page.kpis');          // [{number,label}]
//   const outcomes    = useArr(t, 'impact_page.outcomes');      // [{key,title,desc,bullets[]}]
//   const testimonials= useArr(t, 'impact_page.testimonials');  // [{quote,name,meta}]
//   const milestones  = useArr(t, 'impact_page.milestones');    // [{year,text}]
//   const reports     = useArr(t, 'impact_page.reports.items'); // [{label,href}]

//   return (
//     <div className="container mx-auto px-4 py-10 bg-white rounded-lg shadow-lg my-8 border border-gray-200 max-w-7xl">
//       {/* Header */}
//       <header className="max-w-3xl mx-auto text-center mb-10">
//         <h1 className="text-4xl font-extrabold text-black mb-4">{t('impact')}</h1>
//         <p className="text-gray-800 text-base md:text-lg lg:text-xl">
//           {t('impact_page.lead', { defaultValue: t('impact_description') })}
//         </p>
//       </header>

//       {/* KPI Stats */}
//       {kpis.length > 0 && (
//         <section className="mb-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {kpis.map((s, i) => (
//               <div key={i} className="bg-gray-50 border rounded-xl p-6 text-center shadow-sm">
//                 <div className="text-3xl font-extrabold text-black">{s.number}</div>
//                 <div className="text-gray-700 mt-1">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Outcomes / Program Results */}
//       {outcomes.length > 0 && (
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-black mb-6 text-center">{t('impact_page.outcomes_title')}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {outcomes.map((o, idx) => (
//               <article key={idx} className="h-full border rounded-xl p-6 bg-white shadow-sm hover:shadow-lg transition">
//                 <h3 className="font-semibold text-lg text-black mb-2">{o.title}</h3>
//                 <p className="text-gray-700 mb-3">{o.desc}</p>
//                 {Array.isArray(o.bullets) && o.bullets.length > 0 && (
//                   <ul className="space-y-2 list-disc pl-5 text-gray-700">
//                     {o.bullets.map((b, i) => <li key={i}>{b}</li>)}
//                   </ul>
//                 )}
//               </article>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Testimonials */}
//       {testimonials.length > 0 && (
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-black mb-6 text-center">{t('impact_page.testimonials_title')}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//             {testimonials.map((tst, i) => (
//               <figure key={i} className="border rounded-xl p-6 bg-gray-50 shadow-sm h-full">
//                 <blockquote className="text-gray-800 italic">“{tst.quote}”</blockquote>
//                 <figcaption className="mt-4">
//                   <div className="font-semibold text-black">{tst.name}</div>
//                   <div className="text-gray-600 text-sm">{tst.meta}</div>
//                 </figcaption>
//               </figure>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Milestones / Timeline */}
//       {milestones.length > 0 && (
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-black mb-6 text-center">{t('impact_page.milestones_title')}</h2>
//           <div className="relative pl-6">
//             <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300" aria-hidden />
//             <ul className="space-y-6">
//               {milestones.map((m, idx) => (
//                 <li key={idx} className="relative">
//                   <span className="absolute -left-0.5 top-1.5 w-3 h-3 rounded-full bg-black" aria-hidden />
//                   <div className="bg-white border rounded p-4 shadow-sm">
//                     <div className="font-bold text-black">{m.year}</div>
//                     <p className="text-gray-800">{m.text}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>
//       )}

//       {/* Reports */}
//       {reports.length > 0 && (
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-black mb-4 text-center">{t('impact_page.reports.title')}</h2>
//           <div className="flex flex-wrap justify-center gap-3">
//             {reports.map((r, i) => (
//               <a key={i} href={r.href || '#'} className="px-4 py-2 rounded border bg-white shadow hover:shadow-md">
//                 {r.label}
//               </a>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* CTA */}
//       <div className="flex flex-col sm:flex-row gap-3 justify-center">
//         <Link to="/contact" className="px-6 py-3 rounded bg-black text-white text-center hover:bg-gray-900">
//           {t('contact')}
//         </Link>
//         <Link to="/donate" className="px-6 py-3 rounded bg-blue-600 text-white text-center hover:bg-blue-500">
//           {t('donate_now')}
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Impact;


import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const useArr = (t, key) => {
  const v = t(key, { returnObjects: true, defaultValue: [] });
  if (Array.isArray(v)) return v;
  if (v && typeof v === 'object') return Object.values(v);
  return [];
};

function Impact() {
  const { t } = useTranslation();

  const kpis        = useArr(t, 'impact_page.kpis');          // [{number,label}]
  const outcomes    = useArr(t, 'impact_page.outcomes');      // [{key,title,desc,bullets[]}]
  const testimonials= useArr(t, 'impact_page.testimonials');  // [{quote,name,meta}]
  const milestones  = useArr(t, 'impact_page.milestones');    // [{year,text}]
  const reports     = useArr(t, 'impact_page.reports.items'); // [{label,href}]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
            {t('impact')}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            {t('impact_page.lead', { defaultValue: t('impact_description') })}
          </p>
        </header>

        {/* KPI Stats */}
        {kpis.length > 0 && (
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {kpis.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="bg-white text-black rounded-2xl p-8 mb-3 transform group-hover:scale-105 transition-transform">
                    <div className="text-4xl md:text-5xl font-black mb-2">
                      {s.number}
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcomes */}
        {outcomes.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('impact_page.outcomes_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {outcomes.map((o, idx) => (
                <article key={idx} className="group">
                  <div className="border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-600 transition-colors bg-gray-900/20">
                    <div className="w-12 h-12 bg-white rounded-xl mb-6 flex items-center justify-center">
                      <div className="w-6 h-6 bg-black rounded-full"></div>
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-4">{o.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{o.desc}</p>
                    {Array.isArray(o.bullets) && o.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {o.bullets.map((b, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('impact_page.testimonials_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {testimonials.map((tst, i) => (
                <figure key={i} className="group">
                  <div className="border border-gray-800 rounded-2xl p-8 bg-gray-900/20 h-full hover:border-gray-600 transition-colors">
                    <div className="text-4xl text-white mb-4 font-bold">"</div>
                    <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-6">
                      {tst.quote}
                    </blockquote>
                    <figcaption>
                      <div className="font-bold text-white text-lg">{tst.name}</div>
                      <div className="text-gray-400 text-sm mt-1">{tst.meta}</div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Milestones */}
        {milestones.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('impact_page.milestones_title')}
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white"></div>
              <ul className="space-y-8">
                {milestones.map((m, idx) => (
                  <li key={idx} className="relative">
                    <div className="absolute -left-1 top-6 w-3 h-3 rounded-full bg-white"></div>
                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 ml-2 hover:border-gray-600 transition-colors">
                      <div className="font-black text-2xl text-white mb-2">
                        {m.year}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Reports */}
        {reports.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {t('impact_page.reports.title')}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {reports.map((r, i) => (
                <a key={i} 
                   href={r.href || '#'} 
                   className="px-6 py-3 border border-gray-700 rounded-xl bg-gray-900/50 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all font-medium">
                  {r.label}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/contact" className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
            {t('contact')}
          </Link>
          <Link to="/donate" className="px-8 py-4 border border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-colors">
            {t('donate_now')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Impact;
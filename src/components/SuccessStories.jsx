// SuccessStories.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Slider from './Slider';

const SuccessStories = () => {
  const { t } = useTranslation();
  const { stories } = useSelector(state => state.successStories);
  const title = t('success_stories.title');

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            {t('success_stories.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {t('success_stories.description')}
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Loading State */}
        {!stories || stories.length === 0 ? (
          <div className="text-center py-12">
            <div className="animate-pulse">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-200 h-80 rounded-xl"></div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 mt-6">{t('success_stories.loading')}</p>
          </div>
        ) : (
          <div className="success-stories-section">
            <Slider 
              data={stories} 
              title={title}
              className="success-stories-slider"
              variant="stories"
            />
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">{t('success_stories.lives_impacted')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">{t('success_stories.projects_completed')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">{t('success_stories.communities_served')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">{t('success_stories.success_rate')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
import React from 'react';
import { useTranslation } from 'react-i18next';

const GetInvolved = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg my-8 border border-gray-200 max-w-2xl w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-black mb-4 text-center">{t('getInvolved')}</h1>
      <p className="text-gray-800 text-center text-base md:text-lg lg:text-xl mb-6">{t('get_involved_description')}</p>
      <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">{t('join_now')}</button>
    </div>
  );
};

export default GetInvolved;

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  const btn = (lng, label) => (
    <button
      onClick={() => i18n.changeLanguage(lng)}
      className={`mx-1 px-2 py-1 rounded border text-sm
        ${current === lng ? 'bg-black text-white' : 'bg-white text-black border-black'}`}
      aria-pressed={current === lng}
    >
      {label}
    </button>
  );

  return (
    <div className="flex justify-end p-2 bg-black sticky top-0 z-[60]">
      {btn('en','English')}
      {btn('hi','हिन्दी')}
    </div>
  );
};

export default LanguageSwitcher;

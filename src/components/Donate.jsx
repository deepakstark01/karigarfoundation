import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState('');

  const donationAmounts = [
    { amount: '500', label: '₹500' },
    { amount: '1000', label: '₹1,000' },
    { amount: '2500', label: '₹2,500' },
    { amount: '5000', label: '₹5,000' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
            {t('donate')}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t('donate_description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8 uppercase tracking-wide">
              {t('make_donation')}
            </h2>

            {/* Quick Amount Selection */}
            <div className="mb-8">
              <h3 className="font-bold text-black mb-4 uppercase tracking-wide">
                {t('select_amount')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {donationAmounts.map((donation, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedAmount(donation.amount)}
                    className={`p-4 border-2 font-bold uppercase tracking-wide transition-colors ${
                      selectedAmount === donation.amount
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {donation.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <h3 className="font-bold text-black mb-4 uppercase tracking-wide">
                {t('custom_amount')}
              </h3>
              <input
                type="number"
                placeholder={t('enter_amount')}
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(e.target.value)}
                className="w-full p-4 border-2 border-black focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="font-bold text-black mb-4 uppercase tracking-wide">
                {t('your_information')}
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t('full_name')}
                  className="w-full p-4 border-2 border-black focus:outline-none focus:border-gray-600"
                />
                <input
                  type="email"
                  placeholder={t('email_address')}
                  className="w-full p-4 border-2 border-black focus:outline-none focus:border-gray-600"
                />
                <input
                  type="tel"
                  placeholder={t('phone_number')}
                  className="w-full p-4 border-2 border-black focus:outline-none focus:border-gray-600"
                />
              </div>
            </div>

            {/* Donation Button */}
            <button className="w-full py-4 bg-black text-white font-bold text-xl uppercase tracking-wide border-2 border-black hover:bg-white hover:text-black transition-colors">
              {t('donate_now')} {selectedAmount && `₹${selectedAmount}`}
            </button>
          </div>

          {/* Impact Information */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8 uppercase tracking-wide">
              {t('your_impact')}
            </h2>

            <div className="space-y-6">
              {/* Impact Examples */}
              <div className="bg-white border-2 border-black p-6">
                <div className="font-bold text-black mb-2 text-xl">
                  ₹500
                </div>
                <p className="text-gray-800">
                  {t('impact_500')}
                </p>
              </div>

              <div className="bg-black text-white p-6">
                <div className="font-bold mb-2 text-xl">
                  ₹1,000
                </div>
                <p className="text-gray-200">
                  {t('impact_1000')}
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6">
                <div className="font-bold text-black mb-2 text-xl">
                  ₹2,500
                </div>
                <p className="text-gray-800">
                  {t('impact_2500')}
                </p>
              </div>

              <div className="bg-black text-white p-6">
                <div className="font-bold mb-2 text-xl">
                  ₹5,000
                </div>
                <p className="text-gray-200">
                  {t('impact_5000')}
                </p>
              </div>
            </div>

            {/* Why Donate Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide">
                {t('why_donate')}
              </h3>
              <div className="bg-gray-100 border-2 border-black p-6">
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('donation_benefit_1')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('donation_benefit_2')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('donation_benefit_3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black mb-8 uppercase tracking-wide">
            {t('payment_methods')}
          </h3>
          <div className="bg-white border-2 border-black p-8">
            <p className="text-gray-800 mb-6">
              {t('secure_payment_description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-black text-white font-bold">UPI</span>
              <span className="px-4 py-2 bg-black text-white font-bold">CARD</span>
              <span className="px-4 py-2 bg-black text-white font-bold">NET BANKING</span>
              <span className="px-4 py-2 bg-black text-white font-bold">WALLET</span>
            </div>
          </div>
        </div>

        {/* Contact for Donations */}
        <div className="mt-16 text-center">
          <div className="bg-black text-white p-8">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
              {t('need_help')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('donation_help_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                {t('call_us')}
              </button>
              <a
                href="mailto:rohit.kumar@kaarigarfoundation.org"
                className="px-6 py-3 border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors inline-block"
              >
                {t('email_us')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
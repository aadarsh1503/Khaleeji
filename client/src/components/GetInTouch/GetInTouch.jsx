import React, { useEffect, useState } from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import ContactSection from "./Contact";
import PhoneInput from "react-phone-input-2";
import i2 from"./i2.svg"
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";

const GetInTouch = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const direction = i18n.dir(); // Returns 'ltr' or 'rtl'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    monthlyUsers: '',
    requirement: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');
  const [phoneKey, setPhoneKey] = useState(0); // Add a key for PhoneInput

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language, isRTL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value, countryData, event, formattedValue) => {
    setFormData(prev => ({
      ...prev,
      phone: value, // this includes the country code
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Phone number is required');
      return;
    }
    setIsSubmitting(true);
    setError('');
    
    try {
      // Format the message body to include all fields
      const emailBody = `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Monthly Active Users: ${formData.monthlyUsers}
        Requirement: ${formData.requirement}
      `;

      const response = await fetch('https://khaleeji.app/send_to_a_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: emailBody,
          to: 'info@khaleeji.app',
          subject: `New Contact Form Submission from ${formData.email}`
        })
      });

      if (response.ok) {
        // Reset form and force PhoneInput to re-render
        setFormData({ 
          firstName: '', 
          lastName: '', 
          email: '', 
          phone: '',
          monthlyUsers: '',
          requirement: ''
        });
        setPhoneKey(prevKey => prevKey + 1); // Force PhoneInput to reset
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError(err.message || t('something_went_wrong'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-poppinS  overflow-x-hidden ">
      <div className="  ">
        {/* Left Section */}
        <div className="">
          <ContactSection />
        </div>
        <div className="container relative mt-0 lg:-mt-56 mx-auto px-4 py-8">
          {/* Flex container for left and right sections */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left Section - Address */}
            <div className={`bg-white shadow-lg z-10 rounded-lg p-6 ${i18n.language === 'ar' ? 'lg:right-32 right-0':''} text-center space-y-4 relative left-0  lg:left-32 h-56 bottom-64 lg:bottom-20 lg:w-96`}>
                <div className=" bottom-16 relative">
              <div className=" ">
                <img
                  src={i2}
                  alt="Map"
                  className={`w- h- relative bottom-10 left-16  ${i18n.language === 'ar' ? 'lg:right-12 right-16':''} lg:left-12 left-0 object-fill rounded-xl`}
                />
               
              </div>
              <p className="font-semibold text-gray-800">{t('registered_address')}</p>
            <p className="text-sm text-gray-600">
              {t('address_line')}
            </p>
            <a
              href="https://www.google.com/maps/place/Global+Vision+Solutions/@26.1880014,50.519765,16z/data=!4m6!3m5!1s0x3e49afd0213a19d3:0x2f892ffe9e6f0385!8m2!3d26.1868843!4d50.5237206!16s%2Fg%2F11c1wwzmnl?hl=en&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-dwhite underline text-sm"
            >
              {t('open_in_maps')}
            </a>
            </div>
            </div>
            {/* Right Section - Form */}
            <div className={`  px-4 py-8 grid relative ${i18n.language === 'ar' ? 'lg:right-64':'lg:left-64 mx-auto'} left-0  overflow-hidden -mt-72 lg:-mt-[400px] lg:grid-cols-2  gap-8`}>
              {/* Right Section - Form */}
              <div className={`bg-white shadow-lg z-10 w-[350px] lg:w-[500px] font-poppins relative  ${i18n.language === 'ar' ? 'left-1 relative right-0' : 'lg:right-0 right-4'}  rounded-lg p-8 `}>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                
                {showThankYou && (
                  <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                    <p>{t('thank_you_message')}</p>
                    <p>{t('we_will_contact_you_soon')}</p>
                  </div>
                )}
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {t('first_name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={t('placeholder_first')}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-poppins text-gray-700">
                        {t('last_name')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t('placeholder_last')}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                      />
                    </div>
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-sm font-medium font-poppins text-gray-700">
                      {t('business_email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('placeholder_email')}
                      className="w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <PhoneInput
                    key={phoneKey} // Add key to force re-render
                    country={"bh"}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    enableAreaCodes={true}
                    countryCodeEditable={false}
                    disableCountryCode={false}
                    inputStyle={{
                      width: '100%',
                      height: '40px',
                      border: '1px solid #D1D5DB',
                      color: '#4B5563',
                      direction: direction,
                      textAlign: direction === 'rtl' ? 'right' : 'left',
                      paddingRight: direction === 'rtl' ? '50px' : '12px',
                      paddingLeft: direction === 'ltr' ? '50px' : '12px',
                    }}
                    containerStyle={{
                      width: '100%',
                      direction: direction,
                      display: 'flex',
                      justifyContent: direction === 'rtl' ? 'flex-end' : 'flex-start'
                    }}
                    buttonStyle={{
                      direction: 'ltr',
                      left: direction === 'ltr' ? 0 : 'unset',
                      right: direction === 'rtl' ? 0 : 'unset',
                      position: 'absolute'
                    }}
                    dropdownStyle={{
                      direction: 'ltr'
                    }}
                  />

                  {/* Monthly Active Users */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('monthly_active_users')} <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="monthlyUsers"
                      value={formData.monthlyUsers}
                      onChange={handleChange}
                      className="w-full border font-poppins border-gray-300 rounded-md p-2"
                      required
                    >
                      <option value="" disabled selected>{t('select_option')}</option>
                      <option value="2000-5000">2000-5000</option>
                      <option value="5000-10k">5000-10k</option>
                      <option value="1k-100k">1k-100k</option>
                      <option value="100k-500k">100k-500k</option>
                      <option value="500k-1M">500k-1M</option>
                      <option value="1M+">1M+</option>
                    </select>
                  </div>

                  {/* Requirement */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('requirement')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder={t('placeholder_requirement')}
                      className="w-full border border-gray-300 rounded-md p-2"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-dblack text-white outline hover:bg-white hover:outline-black py-2 px-4 rounded-md hover:text-black"
                    >
                      {isSubmitting ? t('sending') : t('submit')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
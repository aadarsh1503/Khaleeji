import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import i1 from "./i1.png";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [i18n.language, isRTL]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('email', email);
      formData.append('list', 'EIOYqjtqPDtZp89C70AyEA');
      formData.append('subform', 'yes');
      formData.append('hp', '');

      await fetch('https://send.alzyara.com/subscribe', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setMessage(t('thank_you_subscribing'));
      setEmail('');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Subscription failed. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-dblack text-white overflow-x-hidden py-10">
      <h1 className='text-4xl text-center mt-16'>{t('seasoned_nimble_active')}</h1>
      <p className='text-lg text-center max-w-4xl mx-auto mt-6'>{t('team_description')}</p>
      <a href='/contact'>
        <button className='bg-dblack mx-auto block mt-12 mb-16 hover:bg-white rounded-md hover:text-black outline text-white py-3 items-center justify-center px-4'>
          {t('get_in_touch')}
        </button>
      </a>
      <div className="container mx-auto px-4 mt-6 border-t border-white pt-6"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <img src={i1} alt="Unifynd" className="w-64" />
          <p className="mb-1">
            <a href="mailto:info@khaleeji.app" className="hover:underline">info@khaleeji.app</a>
          </p>
          <p>
            <a href="tel:+97317772211" dir='ltr' className="hover:underline">+973 17772211</a>
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('sitemap')}</h4>
          <ul className="space-y-2">
            {/* <li>{t('future_customer_tech')}</li> */}
            <a href='/services' className='relative top-1'>{t('services')}</a>
            <li>{t('careers')}</li>
            {/* <li>{t('resources')}</li> */}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('more_about_us')}</h4>
          <ul className="space-y-2">
          <li><a href="/">{t('about_us')}</a></li>
{/* <li><a href="/security">{t('security')}</a></li>
<li><a href="/privacy-policy">{t('privacy_policy')}</a></li>
<li><a href="/terms-of-service">{t('terms_of_service')}</a></li> */}
<li><a href="/contact">{t('get_in_touch')}</a></li>
{/* <li><a href="/request-demo">{t('request_a_demo')}</a></li> */}

          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('headquarters')}</h4>
          <p className="mb-2">{t('address')}</p>
        </div>
      </div>

      {/* Newsletter Form */}
      <div className={`container mx-auto relative right-8 ${i18n.language === 'ar' ? 'left-5' : 'left-10'} px-4 mt-10 flex flex-col lg:flex-row lg:justify-end lg:items-center`}>
        <div>
          <h4 className="font-bold mb-4">{t('newsletter')}</h4>
          <form onSubmit={handleSubscribe} className={`flex items-center relative ${i18n.language === 'ar' ? 'left-5' : 'right-10'}`}>
            <input
              type="email"
              placeholder={t('enter_email')}
              className="px-4 py-2 bg-dblack text-white outline-none border-b-2 border-white w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           <button
  type="submit"
  className={`text-black bg-white p-2 rounded-full shrink-0 hover:text-dwhite relative z-10`}
  disabled={loading}
>
  {i18n.language === 'ar' ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
</button>
            <div className="absolute bottom-0 left-0 right-0 border-b-2 border-white z-0" />
          </form>
          {message && <p className="text-sm text-white mt-2">{message}</p>}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 border-t border-white pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="https://www.instagram.com/khaleeji.reward/" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="text-2xl cursor-pointer ml-4 hover:text-dwhite" />
            </a>
            <a href="https://x.com/Khaleeji_App" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl cursor-pointer hover:text-dwhite" />
            </a>
            <a href="https://www.facebook.com/Khaleeji.Reward/" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook className="text-2xl cursor-pointer hover:text-dwhite" />
            </a>
          </div>
          <p className="text-sm mt-4 sm:mt-0">
            © {new Date().getFullYear()} {t('company_name')}. {t('all_rights_reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

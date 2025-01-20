import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineMail } from 'react-icons/ai';
import i1 from "./i1.png"
const Footer = () => {
  return (
    <footer className="bg-dblack text-white py-10">
        <h1 className='text-4xl text-center mt-16 '>Seasoned. Nimble. Active.</h1>
        <p className='text-lg text-center max-w-4xl mx-auto mt-6' >We are a diverse and passionate team that takes ownership and empowers you to execute the roadmap. We stay light on our feet and truly enjoy delivering great work.</p>
        <button className='bg-dwhite mx-auto block mt-12 mb-16  hover:bg-dblack hover:outline-dwhite hover:text-dwhite outline  text-gray-700 py-3 items-center justify-center px-4'>Get in Touch</button>
            <div className="container mx-auto px-4 mt-6 border-t border-white pt-6"></div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Unifynd Logo and Contact */}
        <div>
          <div className="mb-">
            {/* Replace with your logo image */}
            <img src={i1} alt="Unifynd" className="w-64" />
          </div>
          <p className="mb-1">info[at]unifynd[dot]com</p>
          <p>+973 17772211</p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-bold mb-4">Sitemap</h4>
          <ul className="space-y-2">
            <li>FutureCustomer.Tech</li>
            <a href='/services' className='relative top-1'>Services</a>
            <li>Careers</li>
            <li>Resources</li>
          </ul>
        </div>

        {/* More About Us */}
        <div>
          <h4 className="font-bold mb-4">More About Us</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Security</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Get in Touch</li>
            <li>Request A Demo</li>
          </ul>
        </div>

        {/* Headquarters */}
        <div>
          <h4 className="font-bold mb-4">Headquarters</h4>
          <p className="mb-2">
          Building: 1320, Rd No 4149, Block: 441, North Sehla, Kingdom of Bahrain
          </p>

        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto relative right-8 px-4 mt-10 flex flex-col lg:flex-row lg:justify-end lg:items-center">
      <div>
  <h4 className="font-bold mb-4">NEWSLETTER</h4>
  <div className="flex items-center relative">
    <input
      type="email"
      placeholder="Enter your email address"
      className="px-4 py-2 bg-dblack text-white outline-none border-b-2 border-white w-full"
    />
    <button className="text-white    hover:text-dwhite px-4 relative z-10">
      <AiOutlineMail />
    </button>

    {/* Underline effect */}
    <div className="absolute bottom-0 left-0 right-0 border-b-2 border-white z-0" />
  </div>
</div>


        {/* Social Icons */}

      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-6 border-t border-white pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <AiOutlineLinkedin className="text-2xl cursor-pointer hover:text-dwhite" />
          <AiOutlineInstagram className="text-2xl cursor-pointer hover:text-dwhite" />
          <AiOutlineYoutube className="text-2xl cursor-pointer hover:text-dwhite" />
          <AiOutlineTwitter className="text-2xl cursor-pointer hover:text-dwhite" />
          <AiOutlineFacebook className="text-2xl cursor-pointer hover:text-dwhite" />
        </div>
          <p className="text-sm mt-4 sm:mt-0">© 2025 Khaleeji Loyal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

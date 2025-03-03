import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'; // Added FaTwitter

import i1 from "./i1.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <div className='w-full min-h-screen'>
      <div
        className="relative bg-cover bg-dblack h-[450px] bg-center"
        style={{
          backgroundImage: `url()`,
        }}
      >
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-DarkRed opacity-0"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-8 lg:px-32">
          <div className="text-white max-w-lg mt-0 lg:-mt-12 ml-0 lg:ml-12">
            {/* Title */}
            <h1 className="lg:text-5xl text-2xl font-bertioga font-bold mb-8">Get in Touch</h1>

            {/* Description */}
            <p className="text-16 lg:w-full lg:flex hidden  w-full mb-8">
            Get in touch with us to learn more about our<br />features, request a demo, or even to learn more <br /> about us — we’re ready to answer any and all of<br /> your questions!
            </p>
            <p className="text-16 lg:w-full lg:hidden flex  w-full mb-8">
            Get in touch with us to learn more about our features, request a demo, or even to learn more  about us — we’re ready to answer any and all of your questions!
            </p>

      
         
          </div>
        </div>
      </div>



    </div>
  );
};

export default ContactSection;

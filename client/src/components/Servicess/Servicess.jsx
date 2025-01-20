import React from 'react'
import LoyaltyAnalytics from './LoyaltyAnalytics'
import LoyaltyMarketing from '../LoyaltyMarketing/LoyaltyMarketing'
import AccountManagement from './AccountManagement'
import Testimonials from '../Testimonials/Testimonials'
import ImpactSection from '../ImpactSection/ImpactSection'

const Servicess = () => {
  return (
    <div><section className="max-w-6xl font-poppins mt-10 mx-auto py-16 px-8 relative">
    <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 text-left space-y-6 z-10">
        <h1 className="text-4xl md:text-4xl text-gray-900 leading-tight space-y-4">
        Amplify Customer Retention &<br /> Engagement and Create a<br /> Stellar Value Proposition with our <br />Robust Gen Next<br />Loyalty Program
        </h1>
<a href='/contact'>
<button className='px-6 py-3 mt-8 outline hover:outline-black rounded-md hover:text-dblack hover:bg-white bg-dblack text-white'>Talk to Us </button>
</a>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0 z-10">
        <img
          src="https://www.unifynd.com/wp-content/uploads/2022/04/Frame-6213.svg"
          alt="Customer Lifecycle"
          className="w-4/4"
        />
      </div>
    </div>

  
  </section>
  <LoyaltyAnalytics />
  <LoyaltyMarketing />
  <AccountManagement />
  <ImpactSection />
  <Testimonials />
  </div>
  )
}

export default Servicess
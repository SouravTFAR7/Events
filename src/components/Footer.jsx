import React from 'react'
import { socials, storeInfo, openingHours } from '../../constants/index.js'

const Footer = () => {
  return (
    <footer id="contact" className="relative md:mt-20 mt-0 px-4 text-center w-full overflow-hidden radial-gradient">
      
      <div className="content container mx-auto lg:py-14 2xl:py-32 py-16 flex flex-col justify-between gap-10 min-h-dvh">
        <div className="footer-main">
          <h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra md:translate-y-0 translate-y-5 text-gradient">
            Dance Events
          </h2>
          <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2 text-yellow">
            Where Movement Meets Magic
          </h3>
          <p className="lg:text-2xl 2xl:text-3xl text-sm text-white-100">
            Experience the rhythm of life through our curated dance events
          </p>
        </div>

        <div className="footer-info grid md:grid-cols-3 gap-8 mt-10">
          <div className="contact-info">
            <h3 className="text-yellow font-modern-negra text-xl mb-4">Contact Us</h3>
            <div className="space-y-2 text-white-100">
              <p>{storeInfo.address}</p>
              <p>Phone: {storeInfo.contact.phone}</p>
              <p>Email: {storeInfo.contact.email}</p>
            </div>
          </div>

          <div className="opening-hours">
            <h3 className="text-yellow font-modern-negra text-xl mb-4">Opening Hours</h3>
            <div className="space-y-2 text-white-100">
              {openingHours.map((schedule, index) => (
                <p key={index}>
                  {schedule.day}: {schedule.time}
                </p>
              ))}
            </div>
          </div>

          <div className="social-links">
            <h3 className="text-yellow font-modern-negra text-xl mb-4">Follow Us</h3>
            <div className="flex justify-center gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="hover:text-yellow transition-colors"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-8 pt-8 border-t border-white/20">
          <p className="text-white-100 text-sm">
            © 2024 Dance Events. All rights reserved. | Designed with passion for movement
          </p>
        </div>
      </div>

      <img src="/images/footer-drinks.png" alt="footer-drinks" className="drink-img" />
    </footer>
  )
}

export default Footer 
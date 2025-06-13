'use client';

import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from './ui/button';

export const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <GitHubLogoIcon fontSize={20} />, href: "https://github.com/RichardQumsieh" },
    { icon: <LinkedInLogoIcon fontSize={20} />, href: "https://www.linkedin.com/in/richard-qumsieh" }
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-gray-900 text-white py-7 px-4 flex flex-col items-center"
      style={{ boxSizing: "border-box" }}
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between gap-6 border-b-1 border-white pb-4">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">Richard Qumsieh</h3>
          <p className="mb-4">
            Professional React developer creating pixel-perfect, high-performance web applications.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                target="_blank"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-transform"
                aria-label={`${link.href.split('.')[1]} profile`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 self-start">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="bg-transparent hover:bg-transparent hover:text-blue-200 cursor-pointer"
                onClick={()=>{ window.location.href = link.href; }}
              >
                  {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
          <address className="not-italic space-y-2">
            <p>richardqumsieh@gmail.com</p>
            <p>+962 (79) 700-6106</p>
            <p>Al-Balqa, JO</p>
          </address>
        </div>
      </div>

      <p className='pt-4'>© {currentYear} - All rights reserved</p>      
      <div className="flex space-x-6 mt-4 md:mt-0">
        <p>There Are No Cookies</p>
      </div>
    </motion.footer>
  );
};
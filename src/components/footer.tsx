import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
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
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Your<span className="text-primary">Name</span></h3>
            <p className="mb-4">
              Professional React developer creating pixel-perfect, high-performance web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors hover:-translate-y-1 transition-transform"
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
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <address className="not-italic space-y-2">
              <p>richardqumsieh@gmail.com</p>
              <p>+1 (234) 567-8900</p>
              <p>San Francisco, CA</p>
            </address>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Richard-Qumsieh. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
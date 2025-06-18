'use client';

import { Card } from '@/components/ui/card';
import { 
  MixerHorizontalIcon, 
  CubeIcon,
  AvatarIcon,
  PieChartIcon 
} from '@radix-ui/react-icons';
import { CodeEditor } from '@/components/works-page/code-editor';
import { motion } from "framer-motion";
import './prism.css';
import { Toaster } from 'sonner';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';
import { useEffect, useState } from 'react';
import WaterTunnel from '@/components/works-page/waterfall-background';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "My Projects | Professional Work Portfolio | [Richard Qumsieh] | [Richard]",
  description: "Explore my full-stack development projects including e-commerce, healthcare apps, and social networks. Built with React, Node.js, and PostgreSQL.",
  keywords: ["web developer portfolio", "React projects", "full-stack developer", "e-commerce development"],
  openGraph: {
    title: "My Development Projects | [Richard Qumsieh] | [Richard]",
    description: "Case studies of my professional web applications",
    images: [{ url: "/favicon.svg" }],
  }
};

const projects = [
  {
    title: "GoPrime",
    description: "Full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.",
    icon: <MixerHorizontalIcon className="w-6 h-6 text-primary" />,
    features: [
      "Product catalog with filters & search",
      "User authentication system",
      "Shopping cart & wishlist",
      "Order tracking system"
    ],
    tech: ["React JS", "Node JS", "PostgreSQL"],
    level: [92, 90, 94],
    codeSnippet: `// React product component
const ProductCard = ({ product }) => {
  const [cart, setCart] = useCart();
  
  return (
    <div className="border rounded-lg p-4">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-48 object-contain"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-primary font-bold">{product.price}</p>
      <button
        onClick={() => setCart([...cart, product])}
        className="mt-2 bg-primary text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};`
  },
  {
    title: "Pharmacy App",
    description: "Desktop application for medication management and prescription processing.",
    icon: <CubeIcon className="w-6 h-6 text-primary" />,
    features: [
      "Medicine inventory tracking",
      "Prescription management",
      "Patient records system",
      "Low stock alerts"
    ],
    tech: ["Electron", "HTML", "CSS", "JS"],
    level: [86, 88, 91],
    codeSnippet: `// Electron main process
const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('src/index.html');
}

app.whenReady().then(createWindow);`
  },
  {
    title: "Social Network",
    description: "Community platform with user profiles, posts, and real-time interactions.",
    icon: <AvatarIcon className="w-6 h-6 text-primary" />,
    features: [
      "User profiles with avatars",
      "Post creation & commenting",
      "Real-time notifications",
      "Email verification"
    ],
    tech: ["React JS", "Node JS", "PostgreSQL", "Material UI", "Nodemailer"],
    level: [91, 89, 95],
    codeSnippet: `// Node.js email service
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendVerificationEmail = async (email, token) => {
  await transporter.sendMail({
    from: 'Social App <noreply@socialapp.com>',
    to: email,
    subject: 'Verify Your Email',
    html: \`Click <a href="${process.env.BASE_URL}/verify?token=\${token}">here</a> to verify\`
  });
};`
  },
  {
    title: "NPO Accounting",
    description: "Desktop application for non-profit financial management.",
    icon: <PieChartIcon className="w-6 h-6 text-primary" />,
    features: [
      "Donation tracking",
      "Expense categorization",
      "Financial reports",
      "Multi-user access"
    ],
    tech: ["Electron", "HTML", "CSS", "JS"],
    level: [90, 82, 92],
    codeSnippet: `// Generate financial report
function generateReport(donations, expenses) {
  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  
  return {
    netBalance: totalDonations - totalExpenses,
    donationCount: donations.length,
    expenseCount: expenses.length,
    largestDonation: Math.max(...donations.map(d => d.amount))
  };
}`
  }
];

export default function WorksPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  };

  return (
    <>
      {/* BG */}
      <div className="fixed top-0 left-0 inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-r from-primary/10 via-violet-500/10 to-primary/10"
          animate={{
            rotate: [0, 360],
            x: [-50, -30, -50],
            y: [-50, -60, -50]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="py-12 px-2 sm:px-4 lg:px-8 bg-gray-50">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          <div className='container flex flex-col items-center text-center min-h-screen justify-center px-2 sm:px-0'>
            <WaterTunnel />
            <div className="text-center mb-10 sm:mb-16 z-10">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Real-World Projects
              </h1>
              <p className="mt-3 sm:mt-4 text-md sm:text-xl text-gray-600 z-10">
                Real-world applications built with modern technologies
              </p>
            </div>

            {/* Interactive Project Filters */}
            <div className="flex flex-wrap justify-center md:gap-2 mb-6 sm:mb-8 z-10">
              {['All', 'Web Apps', 'Desktop Apps', 'E-Commerce'].map((filter) => (
                <Button
                  key={filter}
                  variant="ghost"
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>
          
            {/* Dev Approach */}
            <section className="my-3 py-3 w-full z-10">
              <div className="mx-auto px-2 sm:px-4">
                <h3 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">My Development Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      title: "Planning",
                      description: "Detailed requirement analysis and wireframing",
                      icon: "📋"
                    },
                    {
                      title: "Development",
                      description: "Modular, clean code with daily progress updates",
                      icon: "💻"
                    },
                    {
                      title: "Delivery",
                      description: "Thorough testing and documentation",
                      icon: "🚀"
                    }
                  ].map((step, i) => (
                    <div key={i} className="text-center p-4 sm:p-6 border rounded-lg hover:shadow-md transition-shadow bg-white">
                      <span className="text-3xl sm:text-4xl block mb-3 sm:mb-4">{step.icon}</span>
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="relative overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >

                {/* Interactive SVG Decoration */}
                <svg 
                  className={`absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 transition-opacity duration-500 ${hoveredProject === index ? 'opacity-30' : 'opacity-0'}`}
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,0 L100,100 M100,0 L0,100"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                    className="text-violet-500"
                  />
                </svg>
                <div className="flex flex-col md:flex-row">
                  <div className="p-4 sm:p-8 md:w-1/2">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 p-2 sm:p-3 bg-primary/10 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h3>
                        <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">{project.description}</p>
                        
                        <div className="mt-4 sm:mt-6">
                          <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2">Key Features:</h4>
                          <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4 sm:mt-6">
                          <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <span 
                                key={i} 
                                className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Skill Meter */}
                        <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                          {[
                            { skill: "Frontend" },
                            { skill: "Backend" },
                            { skill: "Problem Solving" }
                          ].map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-xs sm:text-sm mb-0.5 sm:mb-1">
                                <span>{item.skill}</span>
                                <span>{project.level?.at(i)}%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${project.level?.at(i)}%` }}
                                  transition={{ duration: 1, delay: i * 0.2 }}
                                  className="h-full bg-primary rounded-full"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-0 md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 min-h-[200px] sm:min-h-[300px]">
                    <CodeEditor 
                      code={project.codeSnippet} 
                      language={
                        project.tech.includes("Electron") ? "javascript" : 
                        project.title === "GoPrime" ? "javascript" : 
                        "javascript"
                      }
                      className="h-full min-h-[200px] sm:min-h-[300px] overflow-x-auto"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Work With Me */}
      <div className="p-4 sm:p-8 max-w-3xl mx-auto rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Why Work With Me?</h2>
        <ul className="mx-auto space-y-3 sm:space-y-4">
          <li className="flex items-start">
            <span className="bg-primary text-white rounded-full p-1 mr-2 sm:mr-3">✓</span>
            <span className="text-sm sm:text-base"><strong>Full Transparency:</strong> Regular updates and open communication</span>
          </li>
          <li className="flex items-start">
            <span className="bg-primary text-white rounded-full p-1 mr-2 sm:mr-3">✓</span>
            <span className="text-sm sm:text-base"><strong>Adaptable Solutions:</strong> Customized to your specific business needs</span>
          </li>
          <li className="flex items-start">
            <span className="bg-primary text-white rounded-full p-1 mr-2 sm:mr-3">✓</span>
            <span className="text-sm sm:text-base"><strong>Quick Learner:</strong> Able to rapidly adapt to new requirements</span>
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}
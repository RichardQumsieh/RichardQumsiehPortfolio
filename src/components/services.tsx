import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "💻",
    title: "React Development",
    description: "Custom React applications built with best practices.",
    features: ["TypeScript", "Performance Optimization", "Tailwind & Shadcn UI"]
  },
  {
    icon: "🎨",
    title: "UI Implementation",
    description: "Pixel-perfect implementation of designs.",
    features: ["Figma to Code", "Animations", "Responsive Design"]
  },
  {
    icon: "🚀",
    title: "Landing Page Optimization",
    description: "High-converting landing pages that boost engagement and drive results.",
    features: ["SEO Best Practices", "A/B Testing", "Fast Load Times"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for your project needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-b from-white to-gray-50"
            >
              <CardHeader>
                <CardTitle className="text-2xl">
                  <span className="text-4xl mb-4 inline">{service.icon}</span>
                  &nbsp;{service.title}
                </CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
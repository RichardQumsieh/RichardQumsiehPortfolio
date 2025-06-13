import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Excellent work! Delivered ahead of schedule.",
    rating: 5
  },
  {
    name: "Michael Lee",
    role: "Product Manager, InnovateX",
    content: "Professional, communicative, and the results exceeded our expectations.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "CTO, WebWorks",
    content: "Quick turnaround and top-notch code quality. Will hire again.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-primary transition-colors"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center mb-6 cursor-help">
                      <div className="bg-gradient-to-r from-primary to-violet-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View on Fiverr/Upwork</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
          <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">📞</div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+962 (79) 700-6106</p>
                </div>
              </div>
              {/* Other contact methods... */}
            </div>
          </div>
          
          <div className="md:w-1/2 p-12">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="johndoe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              
              <Button type="submit" className="w-full py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
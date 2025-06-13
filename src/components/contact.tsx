'use client';

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  const sendEmail = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault(); // Prevent page refresh
    setStatus('Sending...');

    const form = e.target;

    emailjs
      .sendForm(
        'service_97z9znf',
        'template_0shlaqr',
        form,
        '7HCZbs_mXKSVfJZZv'
      )
      .then(
        () => {
          setStatus('Email sent successfully!');
          form.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send email.');
        }
      );
  };

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
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6" method="POST">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="from_name" placeholder="John Doe" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="reply_to" type="email" placeholder="johndoe@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
              </div>

              <Button type="submit" className="w-full py-6 text-lg">
                Send Message
              </Button>

              {status && <p className="text-center mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
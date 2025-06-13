'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';


const hobbyImages = [
  {
    src: '/hobbies/MyPhoto-1.jpeg', // vertical portrait
    alt: 'Casual Relationships',
    aspect: 'aspect-[3/4]'
  },
  {
    src: '/hobbies/MyPhoto-2.jpeg', // vertical portrait 
    alt: 'Family Man',
    aspect: 'aspect-[3/4]'
  },
  {
    src: '/hobbies/MyPhoto-4.jpeg', // vertical portrait
    alt: 'Formal Speech',
    aspect: 'aspect-[3/4]'
  },
  {
    src: '/hobbies/MyPhoto-3.jpeg', // horizontal portrait
    alt: 'Rock Climbing',
    aspect: 'aspect-[4/3]'
  }
];

export function Hobbies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current: container } = scrollRef;
      const scrollAmount = direction === 'right' ? 300 : -300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Activities & Behaviours</h2>
        
        <div className="relative group">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('left')}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('right')}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          >
            {hobbyImages.map((image, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 relative rounded-xl overflow-hidden ${image.aspect} w-[300px] snap-center`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-[right]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white font-medium text-lg">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
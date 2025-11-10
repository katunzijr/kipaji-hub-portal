'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible ? 'animate-section-fade-up' : 'opacity-0 translate-y-10';
      case 'fade-down':
        return isVisible ? 'animate-section-fade-down' : 'opacity-0 -translate-y-10';
      case 'fade-left':
        return isVisible ? 'animate-section-fade-left' : 'opacity-0 translate-x-10';
      case 'fade-right':
        return isVisible ? 'animate-section-fade-right' : 'opacity-0 -translate-x-10';
      case 'scale':
        return isVisible ? 'animate-section-scale' : 'opacity-0 scale-95';
      case 'fade':
        return isVisible ? 'animate-section-fade' : 'opacity-0';
      default:
        return isVisible ? 'animate-section-fade-up' : 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Fade in up animations
    const fadeElements = gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]');
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Scale in animations
    const scaleElements = gsap.utils.toArray<HTMLElement>('[data-animate="scale"]');
    scaleElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Stagger children animations
    const staggerContainers = gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]');
    staggerContainers.forEach((container) => {
      const children = container.children;
      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Parallax elements
    const parallaxElements = gsap.utils.toArray<HTMLElement>('[data-parallax]');
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.2');
      gsap.to(el, {
        y: () => speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

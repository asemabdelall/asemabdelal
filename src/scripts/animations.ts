import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initGSAPAnimations() {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Kill existing ScrollTriggers on re-init to prevent duplicates
  ScrollTrigger.getAll().forEach((t) => t.kill());

  // ----------------------------------------------------
  // 1. HERO ENTRANCE & PARALLAX
  // ----------------------------------------------------
  const heroWord = document.querySelector('.hero-word');
  const heroSub = document.querySelector('.hero-subheadline');
  const heroExplore = document.querySelector('.hero-explore-wrapper');
  const heroBg = document.querySelector('.hero-bg-image');
  const heroTextBlock = document.querySelector('.hero-text-block');
  const header = document.querySelector('.site-header');

  // Header entrance
  if (header) {
    gsap.from(header, {
      y: -25,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.1,
    });
  }

  // Hero main text entrance (Smooth slide & fade in)
  if (heroWord) {
    gsap.from(heroWord, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2,
    });
  }

  if (heroSub) {
    gsap.from(heroSub, {
      y: 25,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.45,
    });
  }

  if (heroExplore) {
    gsap.from(heroExplore, {
      y: 20,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.65,
    });
  }

  // Hero Parallax on Scroll (only when actively scrolling down)
  if (heroTextBlock) {
    gsap.to(heroTextBlock, {
      y: -60,
      opacity: 0,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '#hero',
        start: '35% top',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }

  // Hero Background depth
  if (heroBg) {
    gsap.to(heroBg, {
      y: 50,
      scale: 1.04,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // ----------------------------------------------------
  // 2. SECTION HEADERS REVEAL
  // ----------------------------------------------------
  const sectionHeaders = document.querySelectorAll(
    '.about-header, .work-header, .capabilities-header, .tech-header, .experience-header, .notes-header, .contact-header'
  );

  sectionHeaders.forEach((el) => {
    gsap.from(el, {
      y: 35,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    });
  });

  // ----------------------------------------------------
  // 3. ABOUT SECTION DETAILS
  // ----------------------------------------------------
  const aboutNarrative = document.querySelector('.about-narrative');
  if (aboutNarrative) {
    gsap.from(aboutNarrative.children, {
      y: 30,
      opacity: 0,
      duration: 0.85,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-narrative',
        start: 'top 85%',
        once: true,
      },
    });
  }

  const pillarItems = document.querySelectorAll('.pillar-item');
  if (pillarItems.length) {
    gsap.from(pillarItems, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-pillars',
        start: 'top 85%',
        once: true,
      },
    });
  }

  // ----------------------------------------------------
  // 4. SELECTED WORK (PROJECTS)
  // ----------------------------------------------------
  const projectItems = document.querySelectorAll('.project-story-item');
  projectItems.forEach((item) => {
    const mediaCard = item.querySelector('.project-media-card');
    const details = item.querySelector('.project-details');

    if (mediaCard) {
      gsap.from(mediaCard, {
        scale: 0.94,
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 82%',
          once: true,
        },
      });
    }

    if (details) {
      gsap.from(details.children, {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true,
        },
      });
    }
  });

  // ----------------------------------------------------
  // 5. SERVICES CARDS (STAGGER)
  // ----------------------------------------------------
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length) {
    gsap.from(serviceCards, {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-list',
        start: 'top 85%',
        once: true,
      },
    });
  }

  // ----------------------------------------------------
  // 5.1 TECH STACK CARDS (STAGGER)
  // ----------------------------------------------------
  const techCards = document.querySelectorAll('.tech-card');
  if (techCards.length) {
    gsap.from(techCards, {
      y: 30,
      opacity: 0,
      scale: 0.96,
      duration: 0.85,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.tech-grid',
        start: 'top 85%',
        once: true,
      },
    });
  }

  // ----------------------------------------------------
  // 6. EXPERIENCE TIMELINE (STAGGER)
  // ----------------------------------------------------
  const timelineRows = document.querySelectorAll('.timeline-row');
  if (timelineRows.length) {
    gsap.from(timelineRows, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.experience-timeline',
        start: 'top 85%',
        once: true,
      },
    });
  }

  // ----------------------------------------------------
  // 7. INSIGHTS / NOTES (STAGGER)
  // ----------------------------------------------------
  const noteRows = document.querySelectorAll('.note-row');
  if (noteRows.length) {
    gsap.from(noteRows, {
      y: 25,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.notes-list',
        start: 'top 85%',
        once: true,
      },
    });
  }

  // ----------------------------------------------------
  // 8. CONTACT FINALE ("LET'S BUILD.")
  // ----------------------------------------------------
  const contactHeadline = document.querySelector('.contact-headline');
  const contactSubtext = document.querySelector('.contact-subtext');
  const emailBox = document.querySelector('.email-action-box');
  const socialItems = document.querySelectorAll('.social-item');

  if (contactHeadline) {
    gsap.from(contactHeadline, {
      y: 40,
      opacity: 0,
      scale: 0.96,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        once: true,
      },
    });
  }

  if (contactSubtext) {
    gsap.from(contactSubtext, {
      y: 20,
      opacity: 0,
      duration: 0.85,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        once: true,
      },
    });
  }

  if (emailBox) {
    gsap.from(emailBox, {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-channels',
        start: 'top 88%',
        once: true,
      },
    });
  }

  if (socialItems.length) {
    gsap.from(socialItems, {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.social-links-grid',
        start: 'top 90%',
        once: true,
      },
    });
  }

  // Refresh ScrollTrigger after DOM load
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

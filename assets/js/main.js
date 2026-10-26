/**
 * SANJEEVANI BLOOD CENTRE — MAIN CONTROLLER & GSAP ANIMATIONS
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Multilingual Engine
  if (typeof I18n !== "undefined") {
    I18n.init();
  }

  // Initialize Lucide Icons if loaded
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  // GSAP Animations with prefers-reduced-motion check
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof gsap !== "undefined" && !prefersReducedMotion) {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero entrance animations
    const heroElements = document.querySelectorAll(".hero-animate");
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }

    // ScrollTrigger cards reveal
    const revealCards = document.querySelectorAll(".reveal-card");
    if (revealCards.length > 0 && typeof ScrollTrigger !== "undefined") {
      gsap.from(revealCards, {
        scrollTrigger: {
          trigger: revealCards[0],
          start: "top 85%"
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  }
});

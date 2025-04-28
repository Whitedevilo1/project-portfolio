window.addEventListener('DOMContentLoaded', () => {
    // Title animation
    gsap.fromTo(
      ".title", // Target the title element
      { opacity: 0, y: -50 }, // Start above and invisible
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" } // End at the center
    );
  
    // Project cards animation
    gsap.fromTo(
      ".project-card-1", // Target the project cards
      { opacity: 0, scale: 0.5, rotate: 90 }, // Start small and rotated
      { 
        opacity: 1, 
        scale: 1, 
        rotate: 0, 
        duration: 1.5, 
        ease: "power3.out", 
        stagger: 0.3 // Animate cards one after the other
      }
    );
  });
  gsap.fromTo(
    ".project-card-2", // Target the project cards
    { opacity: 0, scale: 0.5, rotate: 90 }, // Start small and rotated
    { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      duration: 1.5, 
      ease: "power3.out", 
      stagger: 0.3 // Animate cards one after the other
    }
  );

gsap.fromTo(
  ".project-card-3", // Target the project cards
  { opacity: 0, scale: 0.5, rotate: 90 }, // Start small and rotated
  { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    duration: 1.5, 
    ease: "power3.out", 
    stagger: 0.3 // Animate cards one after the other
  }
);

 gsap.fromTo(
      ".project-card-4", // Target the project cards
      { opacity: 0, scale: 0.5, rotate: 90 }, // Start small and rotated
      { 
        opacity: 1, 
        scale: 1, 
        rotate: 0, 
        duration: 1.5, 
        ease: "power3.out", 
        stagger: 0.3 // Animate cards one after the other
      }
    );
  });

gsap.fromTo(".hireme-container h1", { opacity: 0, x: -100 }, { opacity: 1, x: 0, delay: 0.5 });
gsap.fromTo(".hireme-container h2", { opacity: 0, x: -100 }, { opacity: 1, x: 0, delay: 0.5 });
gsap.fromTo(".hireme-container p", { opacity: 0, x: -100 }, { opacity: 1, x: 0, delay: 0.5 });

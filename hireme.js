window.addEventListener('DOMContentLoaded', () => {
  // Title animation
  gsap.fromTo(
    ".title",
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
  );

  // Animate all project cards together
  gsap.fromTo(
    [".project-card-1", ".project-card-2", ".project-card-3", ".project-card-4"], // <-- select all cards manually
    { opacity: 0, scale: 0.5, rotate: 90 },
    { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      duration: 1.5, 
      ease: "power3.out", 
      stagger: 0.3 
    }
  );

  // Animate texts
  gsap.fromTo(".hireme-container h1", { opacity: 0, x: -100 }, { opacity: 1, x: 0, delay: 0.5 });
  gsap.fromTo(".hireme-container h2", { opacity: 0, x: -100 }, { opacity: 1, x: 0, delay: 0.5 });
  gsap.fromTo(".hireme-container p", { opacity: 0, x: -100 }, { opacity: 1, x: 0, delay: 0.5 });
});

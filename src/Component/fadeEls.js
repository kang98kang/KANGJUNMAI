// gsapAnimations.js
import gsap from "gsap";

export const fadeInElements = (selector) => {
  const fadeEls = document.querySelectorAll(selector);
  fadeEls.forEach((fadeEl, index) => {
    gsap.to(fadeEl, 1, {
      delay: (index + 1) * 0.7,
      opacity: 1,
    });
  });
};

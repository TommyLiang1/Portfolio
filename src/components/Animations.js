// GLOBAL ANIMATIONS
export const fadeInFromTop = {
  hidden: { opacity: 0, y: -75 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
};

export const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.25 } },
};

export const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.25 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.25 } },
};

// HOME ANIMATIONS
export const fadeInFromLeftSmallDelay = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
};

export const fadeInFromLeftLargeDelay = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.75 } },
};

export const fadeSpinIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.25 } },
};

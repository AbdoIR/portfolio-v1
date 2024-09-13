export const showUpContainer = {
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.3 } },
};

export const showUpContainerFast = {
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
};

export const showUpItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const showDownNav = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

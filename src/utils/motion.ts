export const MOTION = {
  listItem: {
    hidden: { opacity: 0, x: -20 },
    show: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  },
  hoverLift: { scale: 1.01, x: 3 },
  tap: { scale: 0.98 }
};


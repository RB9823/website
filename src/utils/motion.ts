export const MOTION = {
  listItem: {
    hidden: { opacity: 0, x: -20 },
    show: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.08, 
        duration: 0.35, 
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    })
  },
  hoverLift: { 
    scale: 1.015,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" as const
    }
  },
  tap: { 
    scale: 0.96,
    transition: { 
      duration: 0.12, 
      ease: [0.4, 0.0, 0.2, 1] as const
    }
  },
  buttonHover: {
    scale: 1.03,
    transition: { 
      duration: 0.15, 
      ease: [0.4, 0.0, 0.2, 1] as const
    }
  },
  mobileHover: {
    scale: 1.006,
    transition: { 
      duration: 0.12, 
      ease: [0.4, 0.0, 0.2, 1] as const
    }
  },
  cardHover: {
    scale: 1.003,
    transition: { 
      duration: 0.18, 
      ease: [0.4, 0.0, 0.2, 1] as const
    }
  },
  formSlideIn: {
    initial: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.25, 
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    },
    exit: { 
      opacity: 0, 
      y: -8,
      scale: 0.95,
      transition: { 
        duration: 0.2, 
        ease: [0.4, 0.0, 0.6, 1] as const
      }
    }
  },
  formField: {
    focus: {
      scale: 1.005,
      transition: {
        duration: 0.12,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    },
    blur: {
      scale: 1,
      transition: {
        duration: 0.12,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    }
  },
  loadingSpinner: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "linear" as const,
        repeat: Infinity
      }
    }
  },
  statusMessage: {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 0.6, 1] as const
      }
    }
  },
  ripple: {
    initial: { scale: 0, opacity: 0.8 },
    animate: { 
      scale: 1, 
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    }
  }
};


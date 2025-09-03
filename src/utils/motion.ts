export const MOTION = {
  listItem: {
    hidden: { opacity: 0, x: -20 },
    show: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.4, 
        ease: "easeOut" as const
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
    scale: 0.98,
    transition: { 
      duration: 0.1, 
      ease: "easeOut" as const
    }
  },
  buttonHover: {
    scale: 1.05,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" as const
    }
  },
  mobileHover: {
    scale: 1.008,
    transition: { 
      duration: 0.15, 
      ease: "easeOut" as const
    }
  },
  cardHover: {
    scale: 1.005,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" as const
    }
  }
};


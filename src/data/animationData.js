export const animationData = {
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
      },
    }),
  },
  fromTop: {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
      },
    }),
  },
  fromBottom: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
      },
    }),
  },
  fromLeft: {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
      },
    }),
  },
  fromRight: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
      },
    }),
  },
  opacity: {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
      },
    }),
  },
};

const change = document.querySelector(".change");

const leaveAnimation = () => {
  return new Promise((resolve) => {
    anime({
      targets: change,
      width: "100%",
      duration: 700,
      easing: "linear",
      complete: resolve,
    });
  });
};

const enterAnimation = () => {
  return new Promise((resolve) => {
    anime({
      targets: change,
      width: "0%",
      duration: 700,
      easing: "linear",
      complete: resolve,
    });
  });
};

barba.init({
  transitions: [
    {
      name: "default-transition",
      leave() {
        return leaveAnimation()
      },
      enter() {
        return enterAnimation()
      },
    },
  ],
});

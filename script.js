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
        return leaveAnimation();
      },
      enter(data) {
        const entering = data.next.container;
        // Asegurarnos de que el nuevo contenedor es visible
        entering.style.opacity = "0";
        return enterAnimation().then(() => {
          entering.style.opacity = "1";
        });
      },
      beforeEnter(data) {
        // Aseguramos de que el contenedor saliente no es visible
        data.current.container.style.display = "none";
      },
    },
  ],
});

function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;
  
    function updateCounter() {
      if (currentValue === 100) {
        return;
      }
      currentValue += Math.floor(Math.random() * 10) + 1;
  
      if (currentValue > 100) {
        currentValue = 100;
      }
      counterElement.textContent = currentValue  + "%";
  
      let delay = Math.floor(Math.random() * 100) + 50;
      setTimeout(updateCounter, delay);
    }
    updateCounter();
  }
  startLoader();
  
  gsap.to(".counter", {
    duration: 1.5,
    delay: 3,
    opacity: 0,
    ease: "power4.inOut"
  });
  gsap.to(".bar",{
    duration:1.5,
    delay: 3.5,
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
  });
  gsap.to(".text1",{
    y: -10,
    delay: 3,
    opacity: 0,
    stagger:{
        amount:0.5,
    },
    ease: "power4.inOut",
  })
  
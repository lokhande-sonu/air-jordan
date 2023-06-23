gsap.from("#navbar",{
    y: -60,
    duration: 2,
    opacity: 0,
    delay: 2,
    ease: "slow",
});

gsap.from("#box",{
    left: "-42%",
    duration: 3,
    opacity: 0,
    delay: 2,
    ease: "back",
});

gsap.from("#l-bottom",{
    top: "120%",
    duration: 3,
    opacity: 0,
    delay: 2,
    ease: "bounce",
});

gsap.from("#r-bottom",{
    top: "120%",
    duration: 3,
    opacity: 0,
    delay: 2,
    ease: "bounce",
});

gsap.from("#right",{
    left: "50%",
    duration: 1,
    opacity: 0,
    delay: 1,
});

gsap.from("#main>img",{
    left: "80%",
    duration: 2,
    opacity: 0,
    delay: 2,
    ease: "steps(4)",
});
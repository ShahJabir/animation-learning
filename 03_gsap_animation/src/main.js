import "./style.css";
import gsap from "gsap";

gsap.set(".box", {
  x: 0,
  rotation: 720,
  width: 250,
  height: 250,
  backgroundColor: "crimson",
});

const tl = gsap.timeline({
  repeat: -1,
});

const moves = [
  [-500, 720],
  [500, -720],
  [500, 720],
  [-500, -720],
];

moves.forEach(([x, rotation]) => {
  tl.to(".box", {
    x: `${x >= 0 ? "+=" : "-="}${Math.abs(x)}`,
    rotation: `${rotation >= 0 ? "+=" : "-="}${Math.abs(rotation)}`,
    duration: 2,
    ease: "bounce.out",
  });
});

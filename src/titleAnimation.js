anime.timeline({loop: false})
.add({
  targets: '.ml15 .word',
  scale: [14,1],
  opacity: [0,1],
  easing: "easeOutCirc",
  duration: 800,
  delay: (el, i) => 700 * i
});
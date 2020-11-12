/* Scroll Reveal Animation*/

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  reset: false,
});

sr.reveal(".home__title", {});
sr.reveal(".home__desc", { delay: 500 });
sr.reveal(".home__social", { delay: 1500 });


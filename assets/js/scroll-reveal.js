document.documentElement.classList.add("js");

const elements = document.querySelectorAll(".dither-reveal");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  elements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  elements.forEach((element) => observer.observe(element));
}

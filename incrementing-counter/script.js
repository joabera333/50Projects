const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// const counters = document.querySelectorAll(".counter");
// const speed = 200; // The lower the slower the speed
// const updateCounter = () => {
//   counters.forEach((counter) => {

//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;
//     const increment = target / speed;
//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   });
// };
// updateCounter();

// const counters = document.querySelectorAll(".counter");
// const speed = 200; // The lower the slower the speed
// const updateCounter = () => {
//   counters.forEach((counter) => {
//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;

//     const increment = target / speed;
//     if (c < target) {

//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;

//     }
//   });
// };
// updateCounter();
// const counters = document.querySelectorAll(".counter");
// const speed = 200; // The lower the slower the speed
// const updateCounter = () => {
//   counters.forEach((counter) => {
//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;
//     const increment = target / speed;

//     if (c < target) {

//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {

const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
// This code selects all elements with the class "faq-toggle" and adds a click event listener to each of them. When a toggle is clicked, it toggles the "active" class on its parent element, allowing for the display of the answer to the FAQ question. The "active" class can be used in CSS to change the appearance of the element, such as showing or hiding content.

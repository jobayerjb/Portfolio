// const cursorInner = document.querySelector('.cursor-inner');
// const cursorOuter = document.querySelector('.cursor-outer');

// let previousX;
// let currentX;
// let previousY;
// let currentY;
// const defaults = {
//   innerWidth: 5,
//   innerHeight: 5,
//   outerWidth: 35,
//   outerHeight: 35,
//   radius: 50,
// };
// let isHovered = false;
// let activeLinkEl;

// window.addEventListener('mousemove', (e) => {
//   currentX = e.clientX;
//   currentY = e.clientY;
//   if (!previousX) {
//     previousX = e.clientX;
//     previousY = e.clientY;
//   }
// });

// const setDimensions = (innerWidth, innerHeight, outerWidth, outerHeight, radius, opacity, padding) => {
//   cursorInner.style.width = `${innerWidth - padding * 2}px`;
//   cursorInner.style.height = `${innerHeight - padding * 2}px`;
//   cursorOuter.style.opacity = opacity;
//   cursorOuter.style.width = `${outerWidth}px`;
//   cursorOuter.style.height = `${outerHeight}px`;
//   cursorInner.style.borderRadius = `${radius}%`;
//   cursorOuter.style.borderRadius = `${radius}%`;
// };

// const animation = () => {
//   cursorInner.style.left = `${currentX}px`;
//   cursorInner.style.top = `${currentY}px`;

//   previousX = previousX + (currentX - previousX) / 10;
//   previousY = previousY + (currentY - previousY) / 10;
//   cursorOuter.style.left = `${previousX}px`;
//   cursorOuter.style.top = `${previousY}px`;

//   requestAnimationFrame(animation);
// };

// animation();

// links.forEach((link) => {
//   const newLinkElement = new LinkElement(link);
// });


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

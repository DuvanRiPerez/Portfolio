const header = document.querySelectorAll("#header");

let position = window.scrollY;

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 600 && window.scrollY <= 1400)  {
    header.forEach((element) => {
      element.classList.add("header2");
    });
  } else {
    header.forEach((element) => {
      element.classList.remove("header2");
    });
  }
});

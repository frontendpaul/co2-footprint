const mySiema = new Siema({
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  duration: 500
});

// Controls
const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");
for (const prevBtn of prevBtns) {
  prevBtn.addEventListener("click", () => mySiema.prev());
}
for (const nextBtn of nextBtns) {
  nextBtn.addEventListener("click", () => mySiema.next());
}
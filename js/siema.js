class MySiema extends Siema {
  handleBottomNav() {    
    const addOrRemove = this.currentSlide > 1 ? "add" : "remove";

    document.querySelector(".bottom-nav").classList[addOrRemove]("is-visible");
  }
}

const mySiemaInstance = new MySiema({
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  duration: 500,
  onChange: function() {
    this.handleBottomNav();
  }
});

// Controls
const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");
for (const prevBtn of prevBtns) {
  prevBtn.addEventListener("click", () => mySiemaInstance.prev());
}
for (const nextBtn of nextBtns) {
  nextBtn.addEventListener("click", () => mySiemaInstance.next());
}
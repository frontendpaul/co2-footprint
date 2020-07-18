class MySiema extends Siema {
  handleBottomNav() {    
    const addOrRemove = this.currentSlide > 1 ? "add" : "remove";

    document.querySelector(".bottom-nav").classList[addOrRemove]("is-visible");
  }

  resizeHandler() {
    _currrentViewWidth = window.innerWidth;
    // This is used to prevent the resize handler firing when the 
    // Android keyboard pops up.
    if(Math.abs(window.innerWidth - this._currrentViewWidth) === 0) {
        return; 
    }

    this._currrentViewWidth = window.innerWidth;
    // update perPage number dependable of user value
    this.resolveSlidesNumber();

    // relcalculate currentSlide
    // prevent hiding items when browser width increases
    if (this.currentSlide + this.perPage > this.innerElements.length) {
      this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage;
    }

    this.selectorWidth = this.selector.offsetWidth;

    this.buildSliderFrame();
}
}

const mySiemaInstance = new MySiema({
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  duration: 500,
  draggable: false,
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
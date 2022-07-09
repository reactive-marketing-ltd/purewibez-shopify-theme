class RotatingBanners extends HTMLElement {
	current = 0;
	slides = 0;
	constructor() {
      super();
      console.log(this);
      this.slides = this.querySelectorAll(".rotating-banners__item").length;
      this.querySelector(".rotating-banners__nav-up-arrow").addEventListener('click',this.onPrev.bind(this));
      this.querySelector(".rotating-banners__nav-down-arrow").addEventListener('click',this.onNext.bind(this));
    }

	onNext(e) {
      this.current+=1;
      console.log(this.current, this.slides);
    }

    onPrev(e) {
      this.current-=1;
      console.log(this.current, this.slides);
    }

}

customElements.define('rotating-banners', RotatingBanners);
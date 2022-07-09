class RotatingBanners extends HTMLElement {
	current = 0;
	slides = 0;
	constructor() {
      super();
      this.slides = this["data-slides"];
      this.querySelector(".rotating-banners__nav-up-arrow").addEventListener('click',this.onPrev.bind(this));
      this.querySelector(".rotating-banners__nav-down-arrow").addEventListener('click',this.onNext.bind(this));
    }

	onNext(e) {
      this.current+=1;
      console.log(this.current);
    }

    onPrev(e) {
      this.current-=1;
      console.log(this.current);
    }

}

customElements.define('rotating-banners', RotatingBanners);
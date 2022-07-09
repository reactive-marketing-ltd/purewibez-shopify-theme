class RotatingBanners extends HTMLElement {
	current = 0;
	constructor() {
      super();
      console.log(this);
      this.querySelector(".rotating-banners__nav-up-arrow").addEventListener('click',this.onNext.bind(this));
    }

	onNext(e) {
      this.current+=1;
      console.log(this.current);
    }

}

customElements.define('rotating-banners', RotatingBanners);
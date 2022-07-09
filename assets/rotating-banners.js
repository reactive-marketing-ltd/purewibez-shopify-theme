class RotatingBanners extends HTMLElement {
	current = 0;
	constructor() {
      super();
      this.querySelector(".rotating-banners__nav-up-arrow").addEventListener('click',this.onNext);
    }

	onNext(e) {
      this.current+=1;
      console.log(this.current);
    }

}

customElements.define('rotating-banners', RotatingBanners);
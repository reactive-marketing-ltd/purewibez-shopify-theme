class RotatingBanners extends HTMLElement {
  	this_ele = null;
	current = 0;
	constructor() {
      super();
      this.this_ele = document.querySelector("#"+this.id);
      this.this_ele.querySelector("#"+this.id+".rotating-banners__nav-up-arrow").addEventListener('click',this.onNext.bind(this));
    }

	onNext(e) {
      this.current+=1;
      console.log(this.current);
    }

}

customElements.define('rotating-banners', RotatingBanners);
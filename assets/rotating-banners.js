class RotatingBanners extends HTMLElement {
	current = 0;
	slides = 0;
	slidDuration = 7000;
	autoplay = false;
	constructor() {
      super();
      console.log(this);
      this.slideDuration = parseInt(this.dataset.duration);
      this.slides = this.querySelectorAll(".rotating-banners__item").length;
      this.querySelector(".rotating-banners__nav-up-arrow").addEventListener('click',this.onPrev.bind(this));
      this.querySelector(".rotating-banners__nav-down-arrow").addEventListener('click',this.onNext.bind(this));
      this.activate(0);
      if(this.autoplay){
      setInterval(()=>{
                  this.onNext(null);
    	},this.slideDuration);
    	}
    }

	onNext(e) {
      this.current=this.current>=this.slides-1?0:this.current+1;
      this.activate(this.current);
    }

    onPrev(e) {
      this.current=this.current<=0?this.slides-1:this.current-1;
      this.activate(this.current);
    }
	
	activate(index) {
      this.querySelectorAll(".rotating-banners__item").forEach(ele=>ele.classList.remove("active"));
      this.querySelector("#rotating-banners__item_"+(index+1)).classList.add("active");
	}

}

customElements.define('rotating-banners', RotatingBanners);
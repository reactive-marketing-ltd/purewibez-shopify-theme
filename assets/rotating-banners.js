class RotatingBanners extends HTMLElement {
	current = 0;
	slides = 0;
	slidDuration = 7000;
	autoplay = false;
	tid=-1;
	constructor() {
      super();
      console.log(this);
      this.slideDuration = parseInt(this.dataset.duration);
      this.autoplay = this.dataset.autoplay==="true";
      this.slides = this.querySelectorAll(".rotating-banners__item").length;
      try{
        const dots = this.querySelectorAll(".rotating-banners__nav-step");
        dots && dots.length && dots.forEach((d,ind)=>d.addEventListener('click',()=>{this.activate(ind)}));
        const prevBtn = this.querySelector(".rotating-banners__nav-up-arrow");
        prevBtn && prevBtn.addEventListener('click',this.onPrev.bind(this));
        const nextBtn = this.querySelector(".rotating-banners__nav-down-arrow")
        nextBtn && nextBtn.addEventListener('click',this.onNext.bind(this));
      }catch(e){
        console.error(e);
      }
      this.activate(0);
      this.handleAutoplay.bind(this)();
    }
    
    handleAutoplay(){
      clearTimeout(this.tid);
      if(this.autoplay){
      	this.tid = setTimeout(()=>{this.onNext(null);},this.slideDuration);
      }
    }
	onNext(e) {
      this.current=this.current>=this.slides-1?0:this.current+1;
      this.handleAutoplay();
      this.activate(this.current);
    }

    onPrev(e) {
      this.current=this.current<=0?this.slides-1:this.current-1;
      this.handleAutoplay();
      this.activate(this.current);
    }
	
	activate(index) {
      this.querySelectorAll(".rotating-banners__item").forEach(ele=>ele.classList.remove("active"));
      this.querySelectorAll(".rotating-banners__nav-step").forEach(ele=>ele.classList.remove("active"));
      this.querySelector("#rotating-banners__item_"+(index+1)).classList.add("active");
      this.querySelector("#rotating-banners__nav-step-"+(index+1)).classList.add("active");
	}

}

customElements.define('rotating-banners', RotatingBanners);
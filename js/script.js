import SlideNav from "./slide.js";

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-control');
//console.log(slide);

//slide.changeSlide(3)
//slide.activeNextslide();
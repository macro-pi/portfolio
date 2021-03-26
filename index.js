let init_time = new Date();
let i = 0;
let max_i = 3  // This has to be the amount of phrases you plan
               // to show.

// Here you hard-code each phrase you to display
let phrases = [];
phrases.push("grow in personal knowledge");
phrases.push("be cooperative in my dealings");
phrases.push("build worthwhile solutions");

let textSlideshow = () => {
  display = document.body.querySelector('#slideshow');
  phrase_to_show = phrases[i];
  i++;
  if (i > max_i-1) {
    i = 0;
  }
  display.innerText = phrase_to_show;
};

/* Hover effect on images/div defined below. */
let show = (gallery) => {
  gallery.querySelectorAll(".medium-img-hover-text").forEach( (elem_p) => {
    //elem_p.style.display='block';
    elem_p.style.opacity=1;
  });
};

let hide = (gallery) => {
  gallery.querySelectorAll(".medium-img-hover-text").forEach( (elem_p) => {
    //elem_p.style.display='none';
    elem_p.style.opacity=0;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  window.setInterval(textSlideshow, 2500);
  let gallery_top = document.querySelector('.gallery-top');
  let gallery_bottom = document.querySelector('.gallery-bottom');
  hide(gallery_top);
  hide(gallery_bottom);

  gallery_top.addEventListener('mouseover', () => {show(gallery_top)});
  gallery_top.addEventListener('mouseout', () => {hide(gallery_top)});
  gallery_bottom.addEventListener('mouseover', () => {show(gallery_bottom)});
  gallery_bottom.addEventListener('mouseout', () => {hide(gallery_bottom)});
});
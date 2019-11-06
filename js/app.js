const HERO = document.querySelector('.hero');
const LOGO = document.querySelector('#logo');
const SLIDER = document.querySelector('.background-slider');
const HAMBURGER = document.querySelector('.hamburger-wrapper');
const HEADLINE = document.querySelector('.headline');
const HERO_SLIDER = document.querySelector('.hero-slider');
const DOWN_CARET = document.querySelector('.fa-chevron-down');

const IG = document.querySelector('.fa-instagram');
const FB = document.querySelector('.fa-facebook-f');
const TW = document.querySelector('.fa-twitter');
const IN = document.querySelector('.fa-linkedin-in');




const t1 = new TimelineMax();

// t1.fromTo(SLIDER, .75, {visibility: 'visible', borderRadius: '50%', height: '100', width: '100', transform: 'scale(1)', opacity: '.5'}, {transform: 'scale(17.5)', opacity: '1'})//0-.75
t1.fromTo(SLIDER, .5, {y: '-100%'}, {y: '0%'}, '+=.25')
  .fromTo(LOGO, .5, {y: '-100px'}, {y: '0'})
  .fromTo(HAMBURGER, .5, {y: '-100px'}, {y: '0'}, '-=.5')
  .fromTo(HERO_SLIDER, .5, {visibility: 'visible', height: '0', width: '10px'}, {height: '100%'})
  .fromTo(HERO_SLIDER, .5, {width: '10px'}, {width: '100%'})
  .fromTo(HERO, .01, {visibility: 'hidden'}, {visibility: 'visible'})
  .fromTo(HERO_SLIDER, .5, {x: '0'}, {x: '100%'})
  .fromTo(HEADLINE, .5, {width: '0'}, {visibility: 'visible', width: '460px'}, '-=.25')
  .fromTo(IG, .25, {x: '50px', opacity: '0'}, {x: '0', opacity: '1'}, '-=.1')
  .fromTo(FB, .25, {x: '50px', opacity: '0'}, {x: '0', opacity: '1'}, '-=.1')
  .fromTo(TW, .25, {x: '50px', opacity: '0'}, {x: '0', opacity: '1'}, '-=.1')
  .fromTo(IN, .25, {x: '50px', opacity: '0'}, {x: '0', opacity: '1'}, '-=.1')
  .fromTo(DOWN_CARET, .5, {opacity: '0'}, {opacity: '1'});

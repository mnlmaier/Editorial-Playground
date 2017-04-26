console.log('%c s1410238047 - Manuel Maier - University of Applied Sciences, Upper Austria, Campus Hagenberg ', 'background: #222; color: white');

var content = document.getElementsByClassName('main__wrapper')[0];
console.log(content)
var features = [
  'type',
  'maxwidth',
  'lineheight',
  'paragraph--spacing',
  'hyphenation',
  'initial',
  'basefontsize',
  'headlinestyles',
  'justify'
];

init(features);

/*
binding all the click handlers.
*/
function init($list) {
  $list.forEach(function(item) {
    console.log(item);
    document.getElementsByClassName(item)[0].addEventListener('click', function(event){
      event.preventDefault();
      var feature = event.srcElement.classList[0];
      switch (feature) {
        case 'type':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('type--serif');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'maxwidth':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--maxwidth');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'lineheight':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--lineheight');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'paragraph--spacing':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--paragraph-spacing');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'headlinestyles':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('type--headlines');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'justify':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--justify');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'basefontsize':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('type--base-fontsize');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'hyphenation':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--hyphenation');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'initial':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--initial');
          event.srcElement.classList.toggle('nav--active');
          break;
      }
    })
  });
};

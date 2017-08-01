console.log('%c Manuel Maier - University of Applied Sciences, Upper Austria - 2017 ', 'background: #222; color: white');
console.log('Thanks for checking the dev console. Any suggestions? Drop me a line: mail@manuelmaier.com!')
var content = document.getElementsByClassName('main__wrapper')[0];
var features = [
  'type',
  'maxwidth',
  'lineheight',
  'paragraph--spacing',
  'hyphenation',
  'initial',
  'basefontsize',
  'headlinestyles',
  'justify',
  'smallcaps',
  'ligatures',
  'oldstyle',
  'paragraph--indent',
  'linkstyles',
  'dividers',
  'intro'
];

init(features);

/*
binding all the click handlers.
*/
function init($list) {
  $list.forEach(function(item) {
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
        case 'smallcaps':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('type__opentype--smallcaps');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'ligatures':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('type__opentype--ligatures');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'oldstyle':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('type__opentype--oldstyle');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'paragraph--indent':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--paragraph-indent');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'linkstyles':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('type--link');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'dividers':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section__dividers');
          event.srcElement.classList.toggle('nav--active');
          break;
        case 'intro':
          document.getElementsByClassName('main__wrapper')[0].classList.toggle('section--intro');
          event.srcElement.classList.toggle('nav--active');
          break;
      }
    })
  });
};

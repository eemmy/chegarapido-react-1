window.addEventListener('load', function () {
  new Splide('#carouseldeofertas', {
    direction: 'ttb',
    width: '100%',
    heightRatio: 0.4,
    arrows: false,
    cover: true,
    autoplay: true,
    type: 'loop'
  }).mount();
  
  new Splide('#products-more-requests', {
    gap         : 10,
    pagination: false,
    perPage: 3,
    breakpoints : {
      '768': {
        perPage: 2
      },
      '576': {
        perPage: 1
      },
    }
  }).mount();
  
  const thumbSize = document.querySelector('#products-more-requests img').offsetHeight;
  const arrows = document.querySelectorAll('#products-more-requests .splide__arrow');

  arrows.forEach(arrow => {
    arrow.style.top = `${ thumbSize / 2 }px`
  });

  const slider = document.getElementById('slider');

  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    format: {
      to: function (value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
      },
      from: function (value) {
        return Number(value);
      }
    },
    tooltips: [true, true],
    range: {
        'min': 0,
        'max': 100
    }
  });
});

window.addEventListener('resize', function () {
  const thumbSize = document.querySelector('#products-more-requests img').offsetHeight;
  const arrows = document.querySelectorAll('#products-more-requests .splide__arrow');

  arrows.forEach(arrow => {
    arrow.style.top = `${thumbSize / 2}px`
  })
});

const buttonDecrease = document.getElementById('decrease');
const buttonIncrease = document.getElementById('increase');
const inputQuantity = document.getElementById('quantity');

if (buttonDecrease) {
  buttonDecrease.addEventListener('click', () => {
    let value = parseInt(inputQuantity.value)
  
    value = isNaN(value) ? 0 : value
    value < 1 ? value = 1 : '';
    value--;
  
    inputQuantity.value = value
  });
}

if (buttonIncrease) {
  buttonIncrease.addEventListener('click', () => {
    let value = parseInt(inputQuantity.value)
  
    value = isNaN(value) ? 0 : value
    value++;
  
    inputQuantity.value = value
  });
}

const secondarySlider = new Splide( '#secondary-slider', {
	rewind      : true,
	fixedWidth  : 100,
	fixedHeight : 64,
	isNavigation: true,
	gap         : 10,
	focus       : 'center',
	pagination  : false,
	cover       : true,
	breakpoints : {
		'600': {
			fixedWidth  : 66,
			fixedHeight : 40,
    },
	}
} ).mount();

const primarySlider = new Splide('#primary-slider', {
  type: 'fade',
  pagination: false,
  fixedWidth: 371,
  fixedHeight: 300,
  arrows: false,
  cover: true,
  breakpoints: {
    '992': {
      fixedWidth: 466,
      fixedHeight: 300,
    },
    '576': {
      fixedWidth: 510,
      fixedHeight: 300,
    }
  }
} );

primarySlider.sync(secondarySlider).mount();
new Splide('#more-requests-slider', {
  gap: 8,
  perPage: 5,
  pagination: false,
  arrows: false,
  breakpoints: {
    '992': {
      perPage: 4
    },
    '576': {
      perPage: 3
    },
  }
}).mount();
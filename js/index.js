new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className){
      return `<span class="${className}">${index + 1}</span>`
    }
  },
  loop: true,

  autoplay:{
    delay: 5000,
  },

  speed: 1000,

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

})
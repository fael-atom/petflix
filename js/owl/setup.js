$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotsEach:true,
    autoplay:true,
    autoplayTimeout: 3000, // Velocidade do autoplay
    autoplayHoverPause:true,
    smartSpeed:2500, // Velocidade da transição de imagem
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
const hamburguer = document.querySelector(".hamburguer");
const navList = document.querySelector(".nav-list");

if(hamburguer){
  hamburguer.addEventListener('click', ()=>{
    navList.classList.toggle("open")
  })
}

const swiper = new Swiper('.heroslider',{
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "fade",
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
})


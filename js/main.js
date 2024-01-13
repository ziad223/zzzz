let menuIcon = document.querySelector(".menu");

menuIcon.onclick = function () {
  document.querySelector(".nav ul").classList.toggle("open");
};

window.onscroll = function () {
  btnUp();
  if(document.querySelector("body").className != 'dark'){
    changeBakgroundNav();
  }
};
// Nav changeBakground

  function changeBakgroundNav(){
  
      if (window.scrollY > 0) {
        document.querySelector(".nav").style.backgroundColor = "#ccc";
      } else {
        document.querySelector(".nav").style.backgroundColor = "#eee";
      }
  }


// button up

  function btnUp(){
      if(window.scrollY > 800){
        document.querySelector(".up").style.display = 'block';
      }else{
        document.querySelector(".up").style.display = 'none';
      }
  }



document.querySelector(".up").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Home Swiper

let swiper = new Swiper(".home-swiper", {
  dots: true,
  loop: true,

  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Search Nav

document.querySelector(".search-main").onclick = function () {
  document.querySelector(".search-part").classList.add("open");
};

document.querySelector(".search-close").onclick = function () {
  document.querySelector(".search-part").classList.remove("open");
};

document.querySelector(".account-nav").onclick = function () {
  document.querySelector(".login-part").classList.add("open");
};

document.querySelector(".login-close").onclick = function () {
  document.querySelector(".login-part").classList.remove("open");
};

// Feature Swiper



// New Swiper

let swiperNew = new Swiper(".new-swiper", {
  dots: true,
  loop: true,
  slidesPerView : 3,

  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 3
    }
  },
  
});


// Testimonial Swiper
let swiperTesti= new Swiper(".testimonial-content", {
  dots: true,
  loop: true,
  slidesPerView : 1,

  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
  },
  
});

// Dark Mode

document.querySelector(".moon").onclick = function(){
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".moon").style.display = 'none';
  document.querySelector(".sun").style.display = 'block';
}
document.querySelector(".sun").onclick = function(){
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".moon").style.display = 'block';
  document.querySelector(".sun").style.display = 'none';
}
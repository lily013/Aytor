$(function () {
  let searchIcon = document.querySelector(".search_icon");
  let search = document.querySelector("#search");
  let cross = document.querySelector(".cross");
  let input = document.querySelector(".input");
  let mobileSearchIcon = document.querySelector(".mobile_search_icon");

  searchIcon.addEventListener("click", function () {
    search.classList.add("active");
    input.classList.add("increase_width");
  });

  mobileSearchIcon.addEventListener("click", function () {
    search.classList.add("active");
    input.classList.add("increase_width");
  });

  cross.addEventListener("click", function () {
    search.classList.remove("active");
    input.classList.remove("increase_width");
  });

  search.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) {
      search.classList.remove("active");
      input.classList.remove("increase_width");
    }
  });

  //   ADD POPUP
  let btnCross = document.querySelector(".btn_cross");
  let addPopup = document.querySelector("#add_popup");

  btnCross.addEventListener("click", function () {
    addPopup.classList.add("remove_popup");
  });

  window.addEventListener("load", function () {
    setTimeout(() => {
      addPopup.classList.add("new_popup");
    }, 5000);
  });

  // SLICK FOR BANNER

  $('.sliders').slick({
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    dotsClass: "container test"
  });
});
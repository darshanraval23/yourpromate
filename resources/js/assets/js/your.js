
/* -------------------left side section start-----------------------  */

$(document).ready(function () {
  // Set div display to block
  $("#sliderbutton").click(function () {
    // $(".main-add").css("transform", "translateX(" + 0 + "px)");
    if ($('#clickeddown').css('display') == 'none') {
      $('#clickeddown').css('display', 'block');
    }
    else {
      $('#clickeddown').css('display', 'none');

    }
  });
});
/* -------------------left side section End-----------------------  */

/* ------------------btn rotate Start---------------------------------------- */
$(".rotate").click(function () {
  $(this).toggleClass("down");
})
/* ------------------btn rotate Enf---------------------------------------- */

/* ---------------right side section clicked body-----------------  */
jQuery('.menu-button').click(function (e) {
  e.stopPropagation();
  // jQuery('#hide-menu').removeClass('show-menu');
  jQuery('#hide-menu1').addClass('.main-porjdetailas');
  jQuery('.main-porjdetailas').css("transform", "translateX(" + 0 + "px)");
});

// --------------------on button-------------
jQuery('.collaps3, .hero-page').click(function (e) {
  e.stopPropagation();
  jQuery('.main-porjdetailas').css("transform", "translateX(" + 0 + "px)");
  jQuery('.main-porjdetailas').css("transform", "translateX(" + 500 + "px)");
});

/* -----------------Time line ---------------- */
jQuery('.menu-button1').click(function (e) {
  e.stopPropagation();
  // jQuery('#hide-menu').removeClass('show-menu');
  jQuery('#hide-menu1').addClass('.main-time-detail');
  jQuery('.main-time-detail').css("transform", "translateX(" + 0 + "px)");
});

// --------------------on button-------------
jQuery('.collaps1,.hero-page').click(function (e) {
  e.stopPropagation();
  jQuery('.main-time-detail').css("transform", "translateX(" + 0 + "px)");
  jQuery('.main-time-detail').css("transform", "translateX(" + 500 + "px)");
});

/* -----------------Assign project ---------------- */

jQuery('.menu-button2').click(function (e) {
  e.stopPropagation();
  // jQuery('#hide-menu').removeClass('show-menu');
  jQuery('#hide-menu1').addClass('main-assign-detail');
  jQuery('.main-assign-detail').css("transform", "translateX(" + 0 + "px)");
});

// --------------------on button Start-------------
jQuery('.collaps,.hero-page').click(function (e) {
  e.stopPropagation();
  jQuery('.main-assign-detail').css("transform", "translateX(" + 0 + "px)");
  jQuery('.main-assign-detail').css("transform", "translateX(" + 500 + "px)");
});

// -----select members-----
jQuery('.label.ui.dropdown').dropdown();
jQuery('.no.label.ui.dropdown.')
  .dropdown({
    useLabels: false
  });

jQuery('.ui.button').on('click', function () {
  jQuery('.ui.dropdown.')
    .dropdown('restore defaults')
})
// --------------------on button End-------------

// $(".Click-here").on('click', function () {
//   $(".custom-model-main").addClass('model-open');
// });
// $(".close-btn, .bg-overlay").click(function () {
//   $(".custom-model-main").removeClass('model-open');
// });
/* ------------------------edit form Start------------ */

function openForm() {
  document.getElementById("form").style.display = "block";
}

function closeForm() {
  document.getElementById("form").style.display = "none";
}
// 
/* ------------------------edit form End------------ */

/* ------------------------Read more Start------------ */

function openpop() {
  document.getElementById("pop").style.display = "block";
}

function closepop() {
  document.getElementById("pop").style.display = "none";
}
  /* ------------------------Read more End------------ */

  $('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
  });
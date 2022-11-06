
// below is video logo funtionality

const vidcont = document.getElementById('vidcontainer');

window.onload = function() {
  setTimeout(function() {
    vidcont.style.opacity = '0';
  }, 6000);
  setTimeout(function() {
    vidcont.style.display = 'none';
  }, 8000);
}

// below is landing page slideshow funtionality
// Original JavaScript code by Chirp Internet: chirpinternet.eu

window.addEventListener("DOMContentLoaded", e => {
  document.querySelectorAll(".fading-slideshow > li").forEach(
    c => c.addEventListener("animationend", e => e.target.parentNode.appendChild(e.target))
  );
});



// below is hamburger menu funtionality

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navlinks");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navlink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}







// get the contact form modal
var modal = document.getElementById("modal");

// get the button that sends the message
var send = document.getElementById("send-button");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// get the button that opens the contact form modal
var showimage = document.getElementsByClassName("showimage");
var bigimage = document.getElementsByClassName("bigimage");

// when the user clicks on the button, open the modal
bigimage.onclick = function() {
  modal.style.display = "block";
  bigimage.style.display = "block";
  showimage.style.display = "none";
}

// when user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// when user clicks outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




//var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal

//var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
//var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
//function setDataIndex() {

//    for (i = 0; i < modal_btn_multi.length; i++)
//    {
//        modal_btn_multi[i].setAttribute('data-index', i);
//        modalparent[i].setAttribute('data-index', i);
//        span_close_multi[i].setAttribute('data-index', i);
//    }
//}



//for (i = 0; i < modal_btn_multi.length; i++)
//{
//    modal_btn_multi[i].onclick = function() {
//        var ElementIndex = this.getAttribute('data-index');
//        modalparent[ElementIndex].style.display = "block";
//    };

    // When the user clicks on <span> (x), close the modal
//    span_close_multi[i].onclick = function() {
//        var ElementIndex = this.getAttribute('data-index');
//        modalparent[ElementIndex].style.display = "none";
//    };
//}

//window.onload = function() {

//    setDataIndex();
//};

//window.onclick = function(event) {
//    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
//        modalparent[event.target.getAttribute('data-index')].style.display = "none";
//    }

    // OLD CODE
//    if (event.target === modal) {
//        modal.style.display = "none";
//    }
//};

//XXXXXXXXXXXXXXXXXXXXXXX    Modified old code    XXXXXXXXXXXXXXXXXXXXXXXXXX

// Get the modal

//var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = modal.getElementsByClassName("close")[0]; // Modified by dsones uk

// When the user clicks on the button, open the modal

//btn.onclick = function() {

//    modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}
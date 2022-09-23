

var rellax = new Rellax('.rellax');

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






// below is slideshow code for each production's photos

const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);

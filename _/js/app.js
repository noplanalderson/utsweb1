/**
 * Animate Scroll
 */
function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener('scroll', reveal);

// --------------------------------------------------------------------

/**
 * Sticky Navbar
 */
window.onscroll = function() {
	stickyNav()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
	let homeland = document.getElementById('homeland');
	homeland.style = 'margin-top:5rem';
  } else {
    navbar.classList.remove("sticky");
  }
}

// --------------------------------------------------------------------

/**
 * Carousels
 */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000);
}

// --------------------------------------------------------------------

/** 
 * Spinner for content loading
 */
document.addEventListener('click', function(event) {
	if (event.target.classList.contains('menu')) {
		var hrefValue = event.target.getAttribute('data-href');

		document.querySelector('.spinner-overlay').style.display = 'block';

		setTimeout(function() {
			var hideAll = document.getElementsByClassName('frame');
			for (let index = 0; index < hideAll.length; index++) {
				hideAll[index].className = 'frame d-none';
			}
			document.getElementById(hrefValue).className = 'frame d-block';
			document.querySelector('.spinner-overlay').style.display = 'none';
		}, 1000);
	}
});

// --------------------------------------------------------------------

/**
 * Modal Feature
 */

function modal(modalId) {

	var modal = document.getElementById(modalId);
	var body = document.getElementsByTagName('body')[0];
	var span = document.getElementsByClassName("close")[0];

	modal.classList.add('show');
	body.className = 'modal-open';

	span.onclick = function() {
		modal.classList.remove('show');
		body.classList.remove('modal-open');
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.classList.remove('show');
			body.classList.remove('modal-open');
			document.getElementById('content').innerHTML = '';
		}
	}
}

var buttons = document.querySelectorAll('#tbl_galeri .btn-detail');

buttons.forEach(function(button) {
	button.addEventListener('click', function(e) {
		let data = JSON.parse(e.target.getAttribute('data-image'));
		document.getElementById('modal-title').innerText = data.title;
		let detail = document.getElementById(data.id).innerHTML;

		if(data.type == "video") {
			document.getElementById('content').innerHTML = '<iframe class="w-100" height="500" src="'+data.url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
		}
		else{

			document.getElementById('content').innerHTML = '<img src="' + data.url + '" class="w-100 rounded" alt="' + data.title + '">';
		}
		document.getElementById('content-detail').innerHTML = detail;
		modal("myModal");
	});
});

// --------------------------------------------------------------------

function openUkm(evt, ukm) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].classList.remove("tab-active");
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(ukm).classList.add("tab-active");
	evt.currentTarget.className += " active";
  }
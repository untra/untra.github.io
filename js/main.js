var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");
var modeToggle = document.getElementById("mode-toggle");

var icon = normal !== null ? normal : reverse;

function toggleMode() {
	var currentMode = document.body.className
	var nextMode = currentMode === "daymode" ? "nightmode" : "daymode";
	document.body.className = nextMode;
	modeToggle.innerHTML = nextMode === "daymode" ? "day mode" : "night mode";
}


// Toggle the "menu-open" % "menu-opn-left" classes
function toggleMenu() {
	var navRight = document.getElementById("nav");
	var navLeft = document.getElementById("nav-left");
	var nav = navRight !== null ? navRight : navLeft;

	var button = document.getElementById("menu");
	var site = document.getElementById("wrap");

	if (nav.className == "menu-open" || nav.className == "menu-open-left") {
		nav.className = "";
		button.className = "";
		site.className = "";
	} else if (reverse !== null) {
		nav.className += "menu-open-left";
		button.className += "btn-close";
		site.className += "fixed";
	} else {
		nav.className += "menu-open";
		button.className += "btn-close";
		site.className += "fixed";
	}
}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener && icon !== null) {
		icon.addEventListener('click', toggleMenu);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggleMenu);
	} else {
		return;
	}
}

function modeClick() {
	if (document.addEventListener && modeToggle !== null) {
		modeToggle.addEventListener('click', toggleMode);
	} else if (document.attachEvent && modeToggle !== null) {
		modeToggle.attachEvent('onclick', toggleMode);
	} else {
		return;
	}
}

menuClick();
modeClick();

var list = ["Linux User 💻", "Flannel Fiend 👕", "Peach Main 🍑", "French House Aficionado 🎹", "Beer Connoisseur 🍻", "Coloradan 🏴󠁵󠁳󠁣󠁯󠁿", "Boulderite 🌄", "Ski Bum ⛷", "Grill Master 🍖", "Lord of the Dance 🕺", "Nice Young Jewish Boy 👨", "'); DROP TABLE Posts;--", "something else I forget", "Untra 💎", "AV Clubber 📼", "Danger Noodle 🐍", "Rad Dude 👈😎👈", "Your Friend 👈😎👈", "chicken n egg problems 🐣", "ISO 8601 compliant ⏱️", "ISO/IEC 19790 & FIPS 140-3 🧮", "Flying the Coop 🐤" ];
var item = list[Math.floor(Math.random() * list.length)];
document.getElementById("narcissism").innerHTML = item;
var darkToggle = document.querySelector('[dark-toggle]')
if (darkToggle) {
	darkToggle.addEventListener('click', function () {
		document.body.classList.toggle('night');
	});
}


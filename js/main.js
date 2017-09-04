var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
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
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
	} else {
		return;
	}
}

menuClick();
var list = ["Linux User 💻", "Flannel Fiend 👕", "Peach Main 🍑", "French House Aficionado 🎹","Beer Connoisseur 🍻","Coloradan 🏴󠁵󠁳󠁣󠁯󠁿","Boulderite 🌄","Ski Bum ⛷", "Grill Master 🍖", "Lord of the Dance 🕺", "Nice Young Jewish Boy 👨", "'); DROP TABLE Posts;--", "something else I forget", "Untra 💎", "AV Clubber 📼", "Danger Noodle 🐍", "Rad Dude 👈😎👈", "Your Friend 👈😎👈"];
var item = list[Math.floor(Math.random()*list.length)];
document.getElementById("narcissism").innerHTML = item;

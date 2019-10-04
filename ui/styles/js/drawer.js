var toggleButton = document.querySelector(".toolbar__navIcon");
var drawer = document.querySelector(".drawer__container");
let content = document.querySelector(".main__content");
let showButton = document.querySelector(".drawerShowButton");
let hideButton = document.querySelector(".drawerHideButton");
let toggleStatus = true;

toggleButton.addEventListener("click", drawerToggle);

function drawerToggle() {
	console.log('toggle');
	if(toggleStatus) {
		drawer.classList.add("toggle");
		toggleStatus = false;
		content.style.paddingLeft = "0";
	}
	else {
		drawer.classList.remove("toggle");
		toggleStatus = true;

		content.style.paddingLeft = "260px";

	}
}
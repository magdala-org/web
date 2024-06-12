let multiMenuBtn = $("button[u-nav-multi='menu-button']");
let multiOpenBtn = $("button[u-nav-multi='button']");
let multiMain = $("div[u-nav-multi='main']");
let multiWrap = $("div[u-nav-multi='wrapper']");
let multiContent = $("div[u-nav-multi='content']");
let multiBackBtn = $("button[u-nav-multi='back']");
let indexMultiActive;

let showMulti = gsap.timeline({
	paused: true,
  defaults: { duration: 0.3 }
});

showMulti.to(multiMain, { opacity: 0 });
showMulti.to(multiMain, { x: "-5%" }, "<");
showMulti.set(multiMain, { display: "none" });
showMulti.from(multiWrap, { opacity: 0 });
showMulti.from(multiWrap, { x: "5%" }, "<");
showMulti.set(multiWrap, { display: "block" }, "<");

multiMenuBtn.on("click", function () {
	if (showMulti.progress() !== 0) {
  	showMulti.reverse();
  }
});

multiOpenBtn.on("click", function () {

	let indexMultiBtn = multiOpenBtn.index($(this));
	multiContent.hide();
	multiContent.eq(indexMultiBtn).show();
	showMulti.play();
});

multiBackBtn.on("click", function () {
	showMulti.reverse();
});

let dropdownOpenBtn = $("button[u-nav-dropdown='button']");
let dropdownWrap = $("div[u-nav-dropdown='wrapper']");
let dropdownContent = $("div[u-nav-dropdown='content']");
let dropdownCloseBtn = $("div[u-nav-dropdown='close']");
let indexDropdownActive;

let showDropdown = gsap.timeline({
	paused: true,
  defaults: { duration: 0.3 }
});

showDropdown.from(dropdownWrap, { opacity: 0 });
showDropdown.set(dropdownWrap, { display: "block" }, "<");

dropdownOpenBtn.on("click", function () {

	let indexDropdownBtn = dropdownOpenBtn.index($(this));
  
	if (indexDropdownBtn !== indexDropdownActive & showDropdown.progress() !== 0 ) {
		dropdownContent.hide();
		dropdownContent.eq(indexDropdownBtn).show();
    indexDropdownActive = indexDropdownBtn;
  	return
  }
  
  dropdownContent.hide();
	dropdownContent.eq(indexDropdownBtn).show();

	if (showDropdown.progress() === 0) {
    showDropdown.play();
    indexDropdownActive = indexDropdownBtn;
  } else {
  	showDropdown.reverse();
  }
});

dropdownCloseBtn.on("click", function () {
	showDropdown.reverse();
});
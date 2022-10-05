// define Showing TAg
let keyname = document.querySelector(".keyname");
let keycode = document.querySelector(".keycode");
// Listen To Window
window.addEventListener("keydown", (e) => {
    // Change Showing tag to keyboard Value
    keyname.innerHTML = e.key.toUpperCase();
    keycode.innerHTML = e.keyCode;
    if (e.keyCode === 32) {
        keyname.innerHTML = "Space";
    }
});
// Right click disable
document.addEventListener("contextmenu", function(e){
e.preventDefault();
});

// Keyboard block
document.onkeydown = function(e) {
if (e.keyCode == 123) return false;
if (e.ctrlKey && e.shiftKey && e.keyCode == 73) return false;
if (e.ctrlKey && e.keyCode == 85) return false;
};

// Copy block
document.body.style.userSelect = "none";

// 💧 Watermark Auto Add
let wm = document.createElement("div");
wm.innerHTML = "Ashish Tools";
wm.style.position = "fixed";
wm.style.bottom = "5px";
wm.style.right = "10px";
wm.style.opacity = "0.5";
wm.style.fontSize = "14px";
wm.style.zIndex = "9999";
document.body.appendChild(wm);
wm.style.top = "50%";
wm.style.left = "50%";
wm.style.transform = "translate(-50%, -50%)";
wm.style.opacity = "0.2";

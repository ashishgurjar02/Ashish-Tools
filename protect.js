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

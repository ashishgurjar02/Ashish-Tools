(function(){

// 🔒 Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// 🔒 Block copy shortcuts
document.addEventListener("keydown", function(e){
if(e.ctrlKey && ["c","u","s","i"].includes(e.key)){
e.preventDefault();
}
});

// 🔖 Auto watermark
let wm = document.createElement("div");
wm.innerHTML = "My Tools Website";
wm.style.position = "fixed";
wm.style.bottom = "10px";
wm.style.right = "10px";
wm.style.opacity = "0.25";
wm.style.fontSize = "14px";
wm.style.zIndex = "99999";
wm.style.pointerEvents = "none";
document.body.appendChild(wm);

})();

console.log(data);

let followers =
data?.data?.followers ||
data?.followers ||
data?.result?.followers;

document.getElementById("result").innerText =
"Followers: " + followers;

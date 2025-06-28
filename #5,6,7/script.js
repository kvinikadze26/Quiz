

const manu = document.getElementById("manu");
const openicon = document.getElementById("openicon");
const closeicon = document.getElementById("closeicon");
openicon.addEventListener("click", () => {
    manu.style.transform = "translateX(0)";
});
closeicon.addEventListener("click", () => {
    manu.style.transform = "translateX(-100%)";
});



const button = document.getElementById("button");
const input = document.getElementById("text");
const ul = document.getElementById("ul");
button.addEventListener("click", () => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const text = input.value;
    if (text.length > 10) {
        a.innerText = text.slice(0, 10) + "...";
    } else {
        a.innerText = text;
    }
    li.appendChild(a);
    ul.appendChild(li);
    input.value = null;
});



const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
        header.style.boxShadow = "2px 0px 10px rgba(0, 0, 0, 0.68)";
    } else {
        header.style.boxShadow = "none";
    }
});

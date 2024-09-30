// Footer date code
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastmodified").textContent = new Date(document.lastModified);


// Hamburger code
const ham = document.querySelector('nav');
const list = document.getElementById("list");

ham.addEventListener('click', ()=>{
    list.classList.toggle('show');
    ham.classList.toggle('show');
})


// Codes for Menu list
const home = document.getElementById("home");
const old = document.getElementById("old");
const newer = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small")
const header = document.getElementById("bodyHeader");

home.addEventListener('click', ()=>{
    header.textContent = "Home"
});

old.addEventListener('click', ()=>{
    header.textContent = "Old"
});

newer.addEventListener('click', ()=>{
    header.textContent = "New"
});

large.addEventListener('click', ()=>{
    header.textContent = "Large"
});

small.addEventListener('click', ()=>{
    header.textContent = "Small"
});


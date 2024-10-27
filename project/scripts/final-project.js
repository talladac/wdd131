document.addEventListener('DOMContentLoaded', function() {

    const ham = document.querySelector('nav');
    const list = document.getElementById("list");
  
    ham.addEventListener('click', ()=>{
        list.classList.toggle('open');
        ham.classList.toggle('open');
    });




document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;
})

const placeContainers = document.querySelectorAll("place-container");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

placeContainers.forEach((item, i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
})
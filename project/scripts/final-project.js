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
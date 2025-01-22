const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.
    addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
       


let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let slider =document.querySelector('.slider');


next.addEventListener('click',function(){
    let slides=document.querySelectorAll('.slides')
    slider.appendChild(slides[0]);
})

prev.addEventListener('click',function(){
    let slides=document.querySelectorAll('.slides')
    slider.prepend(slides[slides.length-1]);
})

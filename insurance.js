const hamburger=document.querySelector(".hamburger");
const bars=document.querySelector(".bars");

//click event
//mouseover event
//mouseleave event
hamburger.addEventListener('click',()=>{
    bars.classList.toggle("active")
})
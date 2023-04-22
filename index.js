let box = document.querySelector('.box')
let logo = document.querySelector('.logo')

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            box.style.animation = 'splash 1s ease forwards 0.7s';
        },400)
   })
      
})  
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
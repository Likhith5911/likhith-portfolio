// typing
const text="Stories, scripts, and ideas that people actually stay for.";
let i=0;

function type(){
  const el=document.querySelector(".typing");
  if(!el) return;

  if(i<text.length){
    el.innerHTML+=text.charAt(i);
    i++;
    setTimeout(type,25);
  }
}
type();

// fade animation
const sections=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    const top=sec.getBoundingClientRect().top;
    if(top<window.innerHeight-80){
      sec.classList.add("show");
    }
  });
});

// particles
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    size: { value: 3 },
    move: { speed: 1.2 },
    line_linked: {
      enable: true,
      opacity: 0.2
    }
  }
});
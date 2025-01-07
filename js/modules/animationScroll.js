  
 export default function animationScroll() {
  
    const sections = document.querySelectorAll('[data-anime="scroll"]');
  
    const windowMetade = window.innerHeight * 0.6;
  
    function animar() {
      sections.forEach((e) => {
        const topSection = e.getBoundingClientRect().top;
  
        const sectionVisible = topSection - windowMetade < 0;
  
        sectionVisible ? e.classList.add("ativo") : e.classList.remove("ativo");
  
        // console.log(topSection)
      });
    }
  
    animar();
  
    window.addEventListener("scroll", animar);
  }
//   animationScroll();
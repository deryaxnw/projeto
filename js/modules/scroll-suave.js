export function scrollSuave() {
    const Linkmenu = document.querySelectorAll('[data-tab="suave"] a[href^="#"]');
  
    function scrollToSection(e) {
      e.preventDefault();
  
      const href = e.currentTarget.getAttribute("href");
  
      const section = document.querySelector(href);
  
      const top = section.offsetTop;
  
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  
      // window.scrollTo({
      //     top: top,
      //     behavior: "smooth"
      // })
  
      // console.log(top);
    }
  
    Linkmenu.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }


  export function animationScroll() {
  
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
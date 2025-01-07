export default function scrollSuave() {
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

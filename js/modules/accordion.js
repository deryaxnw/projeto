export default function acordion() {
    const listaAccordion = document.querySelectorAll('[data-anime="accordion"] dt');
    const classActive = "ativo";
  
    if (listaAccordion.length) {
      listaAccordion[0].classList.add(classActive);
      listaAccordion[0].nextElementSibling.classList.add(classActive);
  
      function activeAccordion() {
        this.classList.toggle(classActive);
        this.nextElementSibling.classList.toggle(classActive);
      }
  
      listaAccordion.forEach((item) => {
        item.addEventListener("click", activeAccordion);
      });
    }
  }

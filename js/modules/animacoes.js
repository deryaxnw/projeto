// function initTab() {
//     const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
//     const tabContent = document.querySelectorAll('[data-tab="content"] section');
//     const classActive = "ativo";
  
//     //navegação por tab
  
//     if (tabMenu.length && tabContent.length) {
//       tabContent[0].classList.add(classActive);
  
//       function activeTab(index) {
//         tabContent.forEach((section) => {
//           section.classList.remove(classActive);
//         });
//         const direcao = tabContent[index].dataset.anime
//         tabContent[index].classList.add(classActive, direcao);
//       }
  
//       tabMenu.forEach((itemMenu, index) => {
//         itemMenu.addEventListener("click", () => {
//           activeTab(index);
//         });
//       });
//     }
//   }
//   initTab();
  
//   function acordion() {
//     const listaAccordion = document.querySelectorAll('[data-anime="accordion"] dt');
//     const classActive = "ativo";
  
//     if (listaAccordion.length) {
//       listaAccordion[0].classList.add(classActive);
//       listaAccordion[0].nextElementSibling.classList.add(classActive);
  
//       function activeAccordion() {
//         this.classList.toggle(classActive);
//         this.nextElementSibling.classList.toggle(classActive);
//       }
  
//       listaAccordion.forEach((item) => {
//         item.addEventListener("click", activeAccordion);
//       });
//     }
//   }
//   acordion();
  
  
  
  
  // function scrollSuave() {
  //   const Linkmenu = document.querySelectorAll('[data-tab="suave"] a[href^="#"]');
  
  //   function scrollToSection(e) {
  //     e.preventDefault();
  
  //     const href = e.currentTarget.getAttribute("href");
  
  //     const section = document.querySelector(href);
  
  //     const top = section.offsetTop;
  
  //     section.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  
  //     // window.scrollTo({
  //     //     top: top,
  //     //     behavior: "smooth"
  //     // })
  
  //     // console.log(top);
  //   }
  
  //   Linkmenu.forEach((link) => {
  //     link.addEventListener("click", scrollToSection);
  //   });
  // }
  // scrollSuave();
  
//   function animationScroll() {
  
//     const sections = document.querySelectorAll('[data-anime="scroll"]');
  
//     const windowMetade = window.innerHeight * 0.6;
  
//     function animar() {
//       sections.forEach((e) => {
//         const topSection = e.getBoundingClientRect().top;
  
//         const sectionVisible = topSection - windowMetade < 0;
  
//         sectionVisible ? e.classList.add("ativo") : e.classList.remove("ativo");
  
//         // console.log(topSection)
//       });
//     }
  
//     animar();
  
//     window.addEventListener("scroll", animar);
//   }
//   animationScroll();
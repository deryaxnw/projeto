export function initTab() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const classActive = "ativo";
  
    //navegação por tab
  
    if (tabMenu.length && tabContent.length) {
      tabContent[0].classList.add(classActive);
  
      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove(classActive);
        });
        const direcao = tabContent[index].dataset.anime
        tabContent[index].classList.add(classActive, direcao);
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          activeTab(index);
        });
      });
    }
  }
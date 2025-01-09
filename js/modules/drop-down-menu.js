export function DropDown() {
  const DropDownMenu = document.querySelectorAll("[data-dropdown]");

  DropDownMenu.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outsideClick(this, () => {
      this.classList.remove("active");
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener("click", handleOutsideClick);
    function handleOutsideClick(e) {
      if (!element.contains(e.target)) {
          callback();

      }
    }
  }
}

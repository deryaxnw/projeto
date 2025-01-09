export function DropDown() {

    const DropDownMenu = document.querySelectorAll('[data-dropdown]')
    
    DropDownMenu.forEach(menu => {
        
        ['touchstart', 'click'].forEach(userEvent => {
    
            menu.addEventListener(userEvent, handleClick)
        })
    })
    
    function handleClick(e){
        e.preventDefault();
        this.classList.toggle('active')
    }
}


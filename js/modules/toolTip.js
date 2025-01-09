export function toolTip() {


    
    const tooltips = document.querySelectorAll("[data-tooltip]");
    
    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
    
    function onMouseOver() {
      const toolTipBox = criarTooltipBox(this);
    
      onMouseMove.tooltipBox = toolTipBox
      this.addEventListener("mousemove", onMouseMove);
      onMouseLeave.tooltipBox = toolTipBox;
      onMouseLeave.element = this;
      this.addEventListener("mouseleave", onMouseLeave);
    }
    
    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove)
      },
    };
    
    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
      },
    };
    
    function criarTooltipBox(element) {
      const toolBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      toolBox.classList.add("tooltip");
      toolBox.innerText = text;
      document.body.appendChild(toolBox);
      return toolBox;
    }
}

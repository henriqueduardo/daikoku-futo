export default function initTooltip() {
  const tooltipInfo = document.querySelector("[data-tooltip='info']");
  const tooltipMap = document.querySelector("[data-tooltip='map']");

  if(tooltipInfo && tooltipMap) {
    function onMouseOver() {
      tooltipMap.classList.add("active");
      this.addEventListener('mousemove', onMouseMove.bind(tooltipMap));
    }
    
    function onMouseOut() {
      tooltipMap.classList.remove("active");
    }
    
    function onMouseMove(event) {
      const xOffset = 200; // posição em relação ao mouse
      const yOffset = 30;
    
      this.style.top = event.pageY - xOffset + 'px';
      this.style.left = event.pageX + yOffset + 'px';
    }
    
    tooltipInfo.addEventListener("mouseover", onMouseOver);
    tooltipInfo.addEventListener("mouseout", onMouseOut);
  }
}
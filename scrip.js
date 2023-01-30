const bodyEl=document.querySelector('body');

bodyEl.addEventListener('mousemove', trail)

function trail(e){
 const xPos=e.offsetX;
 const yPos=e.offsetY;
 const spanEl=document.createElement('span')
 bodyEl.appendChild(spanEl);

 spanEl.style.left=xPos+'px';
 spanEl.style.top=yPos+'px';

 const size=Math.random()*100;
 spanEl.style.width=size+'px';
 spanEl.style.height=size+'px';
 setTimeout(() => {
  spanEl.remove()
 }, 1000);
}
var buttons = document.getElementsByClassName('button-ripple');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
    e.preventDefault();
  if(this.getElementsByClassName('ripple').length > 0)
    {
      // this.removeChild(this.childNodes[1]);
      this.removeChild(this.lastChild);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.left = e.clientX - this.getBoundingClientRect().left - d / 2 + 'px';
  circle.style.top = e.clientY - this.getBoundingClientRect().top - d / 2 + 'px';
  circle.style.width = circle.style.height = d + 'px';
  
  circle.classList.add('ripple');
}
/*hamburger menu, inspiratie codepen oefening micro interaction*/


const list = document.querySelector('nav > div');
const button = document.querySelector('nav button');

button.addEventListener('click', function(){
    list.classList.toggle('show');
});



/*carousel w3school.com animated carousel*/
var slideIndex = 0;
carousel ();
function carousel() {
  var i;
  var x = document.getElementsByClassName ("myBlog");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

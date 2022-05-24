

//CLICK DROPDOWN//


 function diana() {
  document.getElementById("tt").classList.toggle("show");
}  
window.onclick = function(event) {
   if (!event.target.matches('.dropbtn2')) {
       var dropdn2 = document.getElementsByClassName("dropdn2-content");
       var i;
   for (i = 0; i < dropdn2.length; i++) {
       var opendropdn2 = dropdn2[i];
       if (opendropdn2.classList.contains('show')) 
   {opendropdn2.classList.remove('show');}
}}}

function chichi() {
document.getElementById("ff").classList.toggle("show");
}  
window.onclick = function(event) {
 if (!event.target.matches('.dropbtn3')) {
     var dropdn2 = document.getElementsByClassName("dropdn3-content");
     var i;
 for (i = 0; i < dropdn3.length; i++) {
     var opendropdn3 = dropdn3[i];
     if (opendropdn3.classList.contains('show')) {
       opendropdn3.classList.remove('show');}
}}}


function myFunction3() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//HIDE HEADER//

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("ul").style.top = "0";
  } else {
    document.getElementsByClassName("ul").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
function validar(){
var firstname=document.getElementById('fname').value;
var lastname=document.getElementById('lname').value;
var amount=document.getElementById('lname').value;
var when=document.getElementById('date').value;
var message=document.getElementById('subject').value;

}
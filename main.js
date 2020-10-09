alert("It is an UNOFFICIAL Website||It works best on Computers or rotate your phone");
function fda() {
  var x = document.getElementById("daoff");
  var y = document.getElementById("daon");
  if (x.style.display === "none") {
    y.style.display="none";
    x.style.display="block";
 } else {
   y.style.display="block";
   x.style.display="none";
 };
 var t = document.getElementById('div1');
 t.classList.toggle('div1-da');
};

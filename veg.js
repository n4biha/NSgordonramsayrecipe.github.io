var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");



btn.onclick = function() {
    modal.style.display = "flex";
}

btn2.onclick = function() {
    modal2.style.display = "flex";
}

btn3.onclick = function() {
    modal3.style.display = "flex";
}


btn4.onclick = function() {
    modal4.style.display = "flex";
}

btn5.onclick = function() {
    modal5.style.display = "flex";
}






window.onclick = function(event) {

    if (event.target==modal) {
        modal.style.display = "none";
      } else if (event.target==modal2) {
        modal2.style.display = "none";
      } else if (event.target==modal3) {
        modal3.style.display = "none";
      } else if (event.target==modal4) {
        modal4.style.display = "none";
      } else if (event.target==modal5) {
        modal5.style.display = "none";
      }

}
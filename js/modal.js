var modal = document.getElementById('modal');
var img = document.getElementById('modalImg');
var img2 = document.getElementById('modalImg2');
var img3 = document.getElementById('modalImg3');
var img4 = document.getElementById('modalImg4');
var modalImg = document.getElementById('img01');

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function (){
    modal.style.display = "none";
}
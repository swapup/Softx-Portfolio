document.getElementById("image").addEventListener("click",function(){
    var Box1 = document.getElementById("ProContaint1");
    var Box2 = document.getElementById("ProContaint2");
    var Box3 = document.getElementById("ProContaint3");
    var Box4 = document.getElementById("ProContaint4");
    var Box5 = document.getElementById("ProContaint5");
    var Box = document.getElementById("portfolio");
    if(Box1.style.display=="none")  {
      Box.style.height="1000px";
       Box1.style.display="flex";
       Box2.style.display="none";
       Box3.style.display="none";
       Box4.style.display="none";
       Box5.style.display="none";

       
       

    }
    else{

      
     Box.style.height="500px";
        Box1.style.display="none";
        
    }




   } );



document.getElementById("image2").addEventListener("click",function(){
    var Box1 = document.getElementById("ProContaint1");
    var Box2 = document.getElementById("ProContaint2");
    var Box3 = document.getElementById("ProContaint3");
    var Box4 = document.getElementById("ProContaint4");
    var Box5 = document.getElementById("ProContaint5");
    var Box = document.getElementById("portfolio");
    if(Box2.style.display=="none")  {
     Box.style.height="1000px";
       Box1.style.display="none";
       Box2.style.display="flex";
       Box3.style.display="none";
       Box4.style.display="none";
       Box5.style.display="none";

    }
    else{
     Box.style.height="500px";
        Box2.style.display="none";
    }




   } );
document.getElementById("image3").addEventListener("click",function(){
    var Box1 = document.getElementById("ProContaint1");
    var Box2 = document.getElementById("ProContaint2");
    var Box3 = document.getElementById("ProContaint3");
    var Box4 = document.getElementById("ProContaint4");
    var Box5 = document.getElementById("ProContaint5");
    var Box = document.getElementById("portfolio");
    if(Box3.style.display=="none")  {
     Box.style.height="1000px";
       Box1.style.display="none";
       Box2.style.display="none";
       Box3.style.display="flex";
       Box4.style.display="none";
       Box5.style.display="none";

    }
    else{
     Box.style.height="500px";
        Box3.style.display="none";
    }




   } );
document.getElementById("image4").addEventListener("click",function(){
    var Box1 = document.getElementById("ProContaint1");
    var Box2 = document.getElementById("ProContaint2");
    var Box3 = document.getElementById("ProContaint3");
    var Box4 = document.getElementById("ProContaint4");
    var Box5 = document.getElementById("ProContaint5");
    var Box = document.getElementById("portfolio");
    if(Box4.style.display=="none")  {
     Box.style.height="1000px";
       Box1.style.display="none";
       Box2.style.display="none";
       Box3.style.display="none";
       Box4.style.display="flex";
       Box5.style.display="none";

    }
    else{
     Box.style.height="500px";
        Box4.style.display="none";
    }




   } );
document.getElementById("image5").addEventListener("click",function(){
    var Box1 = document.getElementById("ProContaint1");
    var Box2 = document.getElementById("ProContaint2");
    var Box3 = document.getElementById("ProContaint3");
    var Box4 = document.getElementById("ProContaint4");
    var Box5 = document.getElementById("ProContaint5");
    var Box = document.getElementById("portfolio");
    if(Box5.style.display=="none")  {
     Box.style.height="1000px";
       Box1.style.display="none";
       Box2.style.display="none";
       Box3.style.display="none";
       Box4.style.display="none";
       Box5.style.display="flex";

    }
    else{
        Box.style.height="500px";
        Box5.style.display="none";
    }




   } );

   var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slideimg");
var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




var slideIndex1 = 1;
showSlides1(slideIndex1);



function plusSlides1(n) {
showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
var i;
var slides1 = document.getElementsByClassName("slideimg1");
var dots = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}









var slideIndex2 = 1;
showSlides2(slideIndex2);



function plusSlides2(n) {
showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
var i;
var slides2 = document.getElementsByClassName("slideimg2");
var dots = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}













var slideIndex3 = 1;
showSlides3(slideIndex3);



function plusSlides3(n) {
showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
var i;
var slides3 = document.getElementsByClassName("slideimg3");
var dots = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
}









var slideIndex4 = 1;
showSlides4(slideIndex4);



function plusSlides4(n) {
showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
var i;
var slides4 = document.getElementsByClassName("slideimg4");
var dots = document.getElementsByClassName("dot4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots[slideIndex4-1].className += " active";
}




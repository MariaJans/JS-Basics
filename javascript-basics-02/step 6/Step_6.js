var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var img4 = document.querySelector("#image4");
var img5 = document.querySelector("#image5");


img1.addEventListener("mouseout",mouseOut);
img2.addEventListener("mouseout",mouseOut);
img3.addEventListener("mouseout",mouseOut);
img4.addEventListener("mouseout",mouseOut);
img5.addEventListener("mouseout",mouseOut);

img1.addEventListener("mouseover",mouseOver);
img2.addEventListener("mouseover",mouseOver);
img3.addEventListener("mouseover",mouseOver);
img4.addEventListener("mouseover",mouseOver);
img5.addEventListener("mouseover",mouseOver);



  function mouseOut(){
    img1.src = "images/image1_2.jpg";
    img2.src = "images/image2_2.jpg";
    img3.src = "images/image3_2.jpg";
    img4.src = "images/image4_2.jpg";
    img5.src = "images/image5_2.jpg";
  }

function mouseOver() {
    img1.src = "images/image1.jpg";
    img2.src = "images/image2.jpg";
    img3.src = "images/image3.jpg";
    img4.src = "images/image4.jpg";
    img5.src = "images/image5.jpg";
   }

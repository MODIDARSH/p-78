var images=[
  "dad-icon-in-cartoon-style-image_csp36621476.jpg",
  "",
  "",
  "",
];
var i=0;
function nextslide(){
  if (i==9){
  i=0;
  }
  document.getElementById("img1").src=images[i];
  i++;

}
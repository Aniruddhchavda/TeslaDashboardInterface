var canvas2 = document.getElementById('viewport');
context = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 650;
context.scale(1,1);

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'teslampa2.jpg';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
}

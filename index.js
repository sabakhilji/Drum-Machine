window.addEventListener("keydown",keypressed);

var buttons=document.getElementsByTagName("button");
var length=buttons.length;
var audios=document.getElementsByClassName("clip");



function afterclick(str){
  
  
  for(let i=0;i<audios.length;i++){
    if(str==audios[i].getAttribute("id")){
      src=audios[i].getAttribute("src");
      document.getElementById("display").innerHTML=src;
      audios[i].play();
      break;  
    }
  }
}
function keypressed(event){

for(let i=0;i<length;i++){  
  
   if(event.keyCode==buttons[i].id){
      src=audios[i].getAttribute("src");
     audios[i].play();
     document.getElementById("display").innerHTML=src;
     break;
   }
 }
}
  

var x=20;
var y=20;
function random(a,b){
    return Math.round(Math.random()*(a-b)+b);
}

function move(ele){
  move(ele,{
    left:random(0,document.documentElement.clientWidth - 20),
    top:random(0,document.documentElement.clientHeight - 20)
    },()=>{
      move(ele);
  })
}

function init(){
  for(var i=0;i<60;i++){
    var div = document.createElement("div");
    div.className = "spider";
    document.body.appendChild(div);
    div.style.left = x + "px";
    div.style.top = y + "px";
    move(div);
  }
}
window.addEventListener('load', init);
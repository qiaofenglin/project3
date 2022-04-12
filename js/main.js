var x=20;
var y=20;
function random(a,b){
    return Math.round(Math.random()*(a-b)+b);
}


function fly(ele,obj,cb){
  console.log(document.documentElement.scrollTop);
    clearInterval(ele.t);
    ele.t = setInterval(() => {
        var i = true;
        for(var attr in obj){
            var eNow = parseInt(getStyle(ele,attr));
            let speed = (obj[attr] - eNow)/10;
            speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
            if(eNow !== obj[attr]){
                i = false;
            }
            ele.style[attr] = eNow + speed + "px";
        }
        if(i){
            clearInterval(ele.t);
            if(cb){
                cb();
            }
        }
    }, 30);
}

function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}




function Spider(obj){
  fly(obj,{
    left:random(0,document.documentElement.clientWidth - 20),
    top:random(0,document.documentElement.clientHeight - 20)
    },()=>{
      Spider(obj);
  })
}

function init(){
  for(var i=0;i<40;i++){
    var div = document.createElement("div");
    div.className = "spider";
    document.body.appendChild(div);
    div.style.left = x + "px";
    div.style.top = y + "px";
    Spider(div);
  }
}
window.addEventListener('load', init);
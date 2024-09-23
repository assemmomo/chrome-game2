var hero= document.getElementById("hero");
var ghost= document.getElementById("ghost");
var main=document.getElementById("main");
var okk=document.getElementById("ok");
var nameqs=document.getElementById("nameqs");
var gameover=document.getElementById("gameover");
var settingsimg=document.getElementById("settingsimg")
var settingspage=document.getElementById("settingspage")
var closee=document.getElementById("x");
var herocolor=document.getElementById("herocolor");
var speeed=document.getElementById("speed")
var point1=document.getElementById("point1");
var point2=document.getElementById("point2");
var pointcounter=document.getElementById("pointcounter");
var pointnumber=document.getElementById("pointnumber");
var input=document.getElementById("input");
var noname=document.getElementById("noname");
var showinfoimg=document.getElementById("showinfoimg");
var showinfo=document.getElementById("showinfo");
var name1=document.getElementById("name1");
var range=document.getElementById("range");
var falsename=document.getElementById("falsename");
var gamelogo1=document.getElementById("gamelogo1");
var thecounter=document.getElementById("thecounter");
var herostyle1=document.getElementById("style1");
var herostyle2=document.getElementById("style2");
var herostyle3=document.getElementById("style3");
var x = 0;
var a=1;
var e=1;

// let number = localStorage.getItem('number') ? parseInt(localStorage.getItem('number')) : 0;

let number = 0;
setInterval(function(){
      localStorage.setItem("coins",0);
},100)



window.onload=function(){
      input.focus();
      gamelogo1.style.width="240px";
      gamelogo1.style.height="200px";
      gamelogo1.style.opacity="1";
}

input.onblur=function(){
      if (input.value==0) {
            falsename.style.display="block";
            okk.style.display="none";
      }else{
            okk.style.display="block";
            falsename.style.display="none";
      }
}

document.addEventListener('contextmenu', function(e){
      e.preventDefault();
})

function jump(){
      document.getElementById("hero").classList.add('jump');
      setTimeout(function(){ 
            document.getElementById("hero").classList.remove('jump');
}
,600) 
}

function jumpsound() {
      if(x=1){
            let audio = new Audio("mario.mp3").play();
            audio.volume=1;
      }
      else{
            audio.volume=0;
      }
}

function down(){
      document.getElementById("hero").classList.add('down');
      setTimeout(function(){ document.getElementById("hero").classList.remove('down');
}
,650)
}

function jumpup(){
      document.getElementById("hero").classList.add('jumpup');
      setTimeout(function(){ document.getElementById("hero").classList.remove('jumpup');
}
,700)
}

var check=setInterval(function(){
      
      var herotop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
      var herowidth = parseInt(window.getComputedStyle(hero).getPropertyValue("width"));
      var ghostleft = parseInt(window.getComputedStyle(ghost).getPropertyValue("left"));
      var ghost2left = parseInt(window.getComputedStyle(ghost2).getPropertyValue("left"));
      var pointleft = parseInt(window.getComputedStyle(point1).getPropertyValue("left"));
      var point2left = parseInt(window.getComputedStyle(point2).getPropertyValue("left"));
      
      if(herotop > 465 && herowidth >= 30 && herowidth < 90 && ghostleft <= 90 && ghostleft > 0){
            ghost.style.animation="none";
            ghost2.style.animation="none";
            gameover.style.top="250px";
            main.style.opacity="0.2"
            hero.style.opacity="0.2"
            hero.style.display="none"
            hero.style.top="100px"
            ghost.style.opacity="0.2"
            document.getElementById("score").style.opacity="0";
            document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;
            point1.style.display="none";
            point1.style.opacity="0";
            point2.style.display="none";
            point2.style.opacity="0";
            pointcounter.style.opacity="0";
            hero.style.display="none";    
            let lose = new Audio("lose.wav").play();
      }

      if(herotop > 435 && herotop < 505 && ghost2left <= 90 && ghost2left > 0){
            ghost.style.animation="none";
            ghost2.style.animation="none";
            document.getElementById("score").style.opacity="0";
            gameover.style.top="250px";
            main.style.opacity="0.2"
            hero.style.opacity="0.2"
            hero.style.display="none"
            hero.style.top="100px"
            ghost.style.opacity="0.2"
            document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;
            point1.style.display="none";
            point1.style.opacity="0";
            point2.style.display="none";
            point2.style.opacity="0";
            pointcounter.style.opacity="0";     
            hero.style.display="none";
            let lose2 = new Audio("lose.wav").play();
      }
      if(herotop > 466 && pointleft <= 90 && pointleft > 75){
            pointnumber.innerHTML++;
            pointnumber.style.animation="pointnumber 0.5s linear";
            point1.style.display="none";
            let coin = new Audio("coin.wav").play(); 
            number++;
            // localStorage.setItem("coins",number);
            // thecounter.innerHTML++
            setTimeout(function (){
                  point1.style.display="block";
                  pointnumber.style.animation="none";
                  
            },2900)

      }
      if(herotop < 400 && herotop > 379 && point2left <= 90 && point2left > 40){
            pointnumber.innerHTML++;
            pointnumber.style.animation="pointnumber 0.5s linear";
            point2.style.display="none";
            let coin2 = new Audio("coin.wav").play();
            // localStorage.setItem("coins",number);
            number++;
            // thecounter.innerHTML++

            setTimeout(function (){
                  point2.style.display="block";
                  pointnumber.style.animation="none"; 
                  
            },3600)
      }
},10)
function okkk(){
      e=0;
      if(input.innerText==" "){
            noname.style.opacity="1";
      } 
      else{
            function ok(){
                  nameqs.style.left="-900px"
                  okk.style.left="-900px"
                  nameqs.style.animation="none"
                  settingspage.style.top="-800px"
                  closee.style.top="10px";
                  let music1 = new Audio("music1.mp3");
                  setInterval(function(){music1.volume = range.value;},100)
                  music1.loop = 20;
                  music1.play();
                  function savee(){
                        music1.volume = range.value;
                  }
                  function showname(){
                        var usernamee= document.getElementById("input").value;
                        document.getElementById("name1").innerText+=" " + "   " + " " + " " +" " +usernamee;
                  }
                  showname();}
                  ok();
      }

}
setInterval(function(){
      document.getElementById("pointlose").innerHTML=document.getElementById("pointnumber").innerHTML;
},100)

function agine(){
      gameover.style.top="-700px";
      document.getElementById("scorecount").innerHTML=0;
      pointnumber.innerHTML=0; 
      main.style.opacity="0.2"
      hero.style.opacity="0.2"
      ghost.style.opacity="0.2"
      settingspage.style.top="-800px"
      closee.style.top="10px";
}
document.getElementById("scorelose").innerHTML=document.getElementById("scorecount").innerHTML;

function settings(){
      settingspage.style.top="-800px"
      closee.style.top="10px";
}
function closesettings(){
      settingspage.style.top="-1700px"
}
function style1(){
      hero.style.background="linear-gradient(rgb(8, 107, 8),rgb(0, 139, 69))";
      herostyle1.style.backgroundColor="rgb(179, 158, 119)";
      herostyle2.style.backgroundColor="rgb(43, 80, 123)";
      herostyle3.style.backgroundColor="rgb(43, 80, 123)";
}
function style2(){
      hero.style.background="linear-gradient(rgb(94, 1, 94),rgb(136, 11, 136))";
      herostyle2.style.backgroundColor="rgb(179, 158, 119)";
      herostyle1.style.backgroundColor="rgb(43, 80, 123)";
      herostyle3.style.backgroundColor="rgb(43, 80, 123)";
}
function style3(){
      hero.style.background="linear-gradient(blue,darkblue)";
      herostyle3.style.backgroundColor="rgb(179, 158, 119)";
      herostyle1.style.backgroundColor="rgb(43, 80, 123)";
      herostyle2.style.backgroundColor="rgb(43, 80, 123)";
}
function speed(){
      herocolor.style.backgroundColor="transparent"
      herocolor.style.color="white"
      document.getElementById("volumerange").style.color="white"
      document.getElementById("showcontrols").style.color="white"
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      speeed.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      speeed.style.color="rgb(172, 36, 88)"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="flex"
      document.getElementById("speed2").style.display="flex"
      document.getElementById("speed3").style.display="flex"
      document.getElementById("runs").style.display="none"
      document.getElementById("volumerange").style.display.backgroundColor="transparent"
      document.getElementById("music").style.display="none"
      range.style.opacity="0";
}
function herocolor1(){
      herocolor.style.backgroundColor="rgba(5, 55, 63, 0.815)"
      herocolor.style.color="rgb(172, 36, 88)"
      speeed.style.color="white"
      document.getElementById("showcontrols").style.color="white"
      document.getElementById("volumerange").style.color="white"
      speeed.style.backgroundColor="transparent"
      document.getElementById("showcontrols").style.backgroundColor="transparent"
      document.getElementById("style1").style.display="block"
      document.getElementById("style2").style.display="block"
      document.getElementById("style3").style.display="block"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
      document.getElementById("runs").style.display="none"
      document.getElementById("volumerange").style.display.backgroundColor="transparent"
      document.getElementById("music").style.display="none"
      range.style.opacity="0";
}
function showcontrols(){
      document.getElementById("showcontrols").style.backgroundColor="rgba(5, 55, 63, 0.815)"
      speeed.style.backgroundColor="transparent"
      speeed.style.color="white"
      herocolor.style.color="white"
      document.getElementById("volumerange").style.color="white"
      document.getElementById("showcontrols").style.color="rgb(172, 36, 88)"
      herocolor.style.backgroundColor="transparent"
      document.getElementById("style1").style.display="none"
      document.getElementById("style2").style.display="none"
      document.getElementById("style3").style.display="none"
      document.getElementById("speed1").style.display="none"
      document.getElementById("speed2").style.display="none"
      document.getElementById("speed3").style.display="none"
      document.getElementById("runs").style.display="flex"
      document.getElementById("volumerange").style.display.backgroundColor="transparent"
      document.getElementById("music").style.display="none"
      range.style.opacity="0";
}

setInterval(function(){
      document.getElementById("scorecount").innerHTML++;
},1000)
setInterval(function(){
      thecounter.innerHTML=number;
},50)

function normal(){
      gameover.style.top="-700px";
      main.style.opacity="1";
      hero.style.opacity="1";
      ghost.style.opacity="1";
      point1.style.opacity="1";
      point1.style.display="block";
      point2.style.opacity="1";
      point2.style.display="block";
      pointcounter.style.opacity="1";
      hero.style.display="block";
      hero.style.top="500px";
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.5s infinite linear";
      ghost2.style.animation="ghost 2.2s infinite linear";
      point1.style.animation="point1 2s infinite linear";
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-1700px";
      closee.style.top="-700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear";
            point2.style.opacity="1";
      },2500)
}
function fast(){
      gameover.style.top="-700px";
      main.style.opacity="1";
      hero.style.opacity="1";
      ghost.style.opacity="1";
      point1.style.opacity="1";
      point1.style.display="block";
      point2.style.opacity="1";
      point2.style.display="block";
      pointcounter.style.opacity="1";
      hero.style.display="block";
      hero.style.top="500px";
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 1.2s infinite linear";
      ghost2.style.animation="ghost 1.9s infinite linear";
      point1.style.animation="point1 2s infinite linear";
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-1700px";
      // closee.style.top="-1700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear";
            point2.style.opacity="1";
      },2500)
}
function veryfast(){
      gameover.style.top="-700px";
      main.style.opacity="1";
      hero.style.opacity="1";
      ghost.style.opacity="1";
      point1.style.opacity="1";
      point1.style.display="block";
      point2.style.opacity="1";
      point2.style.display="block";
      pointcounter.style.opacity="1";
      hero.style.display="block";
      hero.style.top="500px";
      document.getElementById("scorecount").innerHTML=0;
      ghost.style.animation="ghost 0.9s infinite linear";
      ghost2.style.animation="ghost 1.5s infinite linear";
      point1.style.animation="point1 2s infinite linear";
      document.getElementById("score").style.opacity="1";
      settingspage.style.top="-1700px";
      // closee.style.top="-1700px";
      hero.style.display="block";
      setTimeout(function(){
            point2.style.animation="point1 1.8s infinite linear";
            point2.style.opacity="1";
      },1500)
}

function done(){
      herocolor.style.backgroundColor="transparent";
      document.getElementById("showcontrols").style.backgroundColor="transparent";
      speeed.style.backgroundColor="rgba(5, 55, 63, 0.815)";
      document.getElementById("style1").style.display="none";
      document.getElementById("style2").style.display="none";
      document.getElementById("style3").style.display="none";
      document.getElementById("speed1").style.display="flex";
      document.getElementById("speed2").style.display="flex";
      document.getElementById("speed3").style.display="flex";
      document.getElementById("runs").style.display="none";
      document.getElementById("volumerange").style.display.backgroundColor="transparent";
      document.getElementById("music").style.display="none";
      range.style.opacity="0";
}

function showinfoimgg(){
      showinfoimg.style.animation="showinfoimg2 0.9s linear";
      nameqs.style.opacity="0.4";
      setTimeout(
      function(){
            showinfoimg.style.left="1740px";
            showinfoimg.style.bottom="120px";
            showinfoimg.style.transform="rotate(-90deg)";
            document.getElementById("showinfoimg2").style.display="block";
      }
      ,900)
      setTimeout(function(){
            showinfo.style.animation="showinfo 0.5s linear";
            showinfo.style.left="0";
      },500)
}
function closeinfo(){
      showinfo.style.left="-1750px";
      document.getElementById("showinfoimg2").style.display="none";
      document.getElementById("showinfoimg2").style.opacity="0";
      nameqs.style.opacity="1";
      setTimeout(function(){
            showinfoimg.style.animation="closeinfo 0.9s linear";
            showinfoimg.style.left="20px";
            showinfoimg.style.bottom="20px";
            showinfoimg.style.transform="rotate(0deg)";
      },200)
}

function volumerange(){
      document.getElementById("showcontrols").style.backgroundColor="transparent";
      document.getElementById("volumerange").style.color="rgb(172, 36, 88)";
      speeed.style.backgroundColor="transparent";
      herocolor.style.backgroundColor="transparent";
      document.getElementById("showcontrols").style.color="white";
      speeed.style.color="white";
      herocolor.style.color="white";
      document.getElementById("style1").style.display="none";
      document.getElementById("style2").style.display="none";
      document.getElementById("style3").style.display="none";
      document.getElementById("speed1").style.display="none";
      document.getElementById("speed2").style.display="none";
      document.getElementById("speed3").style.display="none";
      document.getElementById("runs").style.display="none";
      range.style.opacity="1";
      document.getElementById("music").style.display="block";
}
document.body.addEventListener('keydown' , e =>{
      if(e.code==="KeyA"){
      jump();
      }
      if(e.code==="KeyS"){
      down();
      }
      if(e.code==="KeyD"){
      jumpup();
      }
      // if(e.code==="Enter"){
      //       okkk();
      //       }
})

      if(e==1){
            document.body.addEventListener('keydown' , s =>{
                  if(s.code==="Enter"){
                        okkk();
                  }
            })
      }
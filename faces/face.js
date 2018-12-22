dom={x:1,y:1}
toan={x:13,y:2}
daniel={x:12,y:6}
vincent={x:19,y:5}
fateema={x:20,y:11}
michael={x:9,y:13}
melany={x:6,y:10}
map=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,6,6,6,6,6,2,2,6,2,2,4,6,2,2,6,2,2,6,2,2,1],[1,2,2,6,2,2,2,2,2,2,6,6,2,6,6,2,2,6,2,2,6,2,2,1],[1,2,2,6,2,6,6,6,2,2,6,2,6,2,6,2,2,6,2,2,6,2,2,1],[1,2,2,6,2,2,2,6,2,2,6,2,2,2,6,2,2,6,2,8,6,2,2,1],[1,2,2,6,6,6,6,6,2,2,6,2,7,2,6,2,2,6,6,6,6,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,6,6,6,2,2,6,6,6,2,2,6,6,6,2,2,6,6,6,2,2,1],[1,2,2,2,6,2,2,2,6,2,2,2,2,6,2,2,2,2,6,2,2,2,2,1],[1,2,2,2,6,2,11,2,6,6,6,2,2,6,6,6,2,2,6,6,6,2,2,1],[1,2,2,2,6,2,2,2,6,2,2,2,2,6,2,2,2,2,6,2,9,2,2,1],[1,2,2,6,6,6,2,2,6,6,6,2,2,6,6,6,2,2,6,6,6,2,2,1],[1,2,2,2,2,2,2,2,2,10,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
var el=document.getElementById('world');var flag=0;function drawWorld(){el.innerHTML='';for(var y=0;y<map.length;y=y+1){for(var x=0;x<map[y].length;x=x+1){if(map[y][x]===1){el.innerHTML+="<div class='wall'></div>"}
else if(map[y][x]===2){el.innerHTML+="<div class='coin'></div>"}
else if(map[y][x]===3){el.innerHTML+="<div class='ground'></div>"}
else if(map[y][x]===4){if(flag%2===0){el.innerHTML+="<div class='toan'></div>"}
else{el.innerHTML+="<div class='toan0'></div>"}}
else if(map[y][x]===5){if(flag%2===0){el.innerHTML+="<div class='dom'></div>"}
else{el.innerHTML+="<div class='dom0'></div>"}
flag+=1}
else if(map[y][x]===6){el.innerHTML+="<div class='green_wall'></div>"}
else if(map[y][x]===7){if(flag%2===0){el.innerHTML+="<div class='daniel'></div>"}
else{el.innerHTML+="<div class='daniel0'></div>"}}
else if(map[y][x]===8){if(flag%2===0){el.innerHTML+="<div class='vincent'></div>"}
else{el.innerHTML+="<div class='vincent0'></div>"}}
else if(map[y][x]===9){if(flag%2===0){el.innerHTML+="<div class='fateema'></div>"}
else{el.innerHTML+="<div class='fateema0'></div>"}}
else if(map[y][x]===10){if(flag%2===0){el.innerHTML+="<div class='michael'></div>"}
else{el.innerHTML+="<div class='michael0'></div>"}}
else if(map[y][x]===11){if(flag%2===0){el.innerHTML+="<div class='melany'></div>"}
else{el.innerHTML+="<div class='melany0'></div>"}}}
el.innerHTML+="<br>"}}
var move=[-1,0,1];window.setInterval(function(){var x=move[Math.floor(Math.random()*move.length)];var y=move[Math.floor(Math.random()*move.length)];if((map[dom.y+y][dom.x+x]!==1)&&(map[dom.y+y][dom.x+x]!==6)){map[dom.y][dom.x]=3;dom.x=dom.x+x;dom.y=dom.y+y;map[dom.y][dom.x]=5;drawWorld()}
if((map[toan.y+y][toan.x+x]!==1)&&(map[toan.y+y][toan.x+x]!==6)){map[toan.y][toan.x]=3;toan.x=toan.x+x;toan.y=toan.y+y;map[toan.y][toan.x]=4;drawWorld()}
if((map[fateema.y+y][fateema.x+x]!==1)&&(map[fateema.y+y][fateema.x+x]!==6)){map[fateema.y][fateema.x]=3;fateema.x=fateema.x+x;fateema.y=fateema.y+y;map[fateema.y][fateema.x]=9;drawWorld()}
if((map[michael.y+y][michael.x+x]!==1)&&(map[michael.y+y][michael.x+x]!==6)){map[michael.y][michael.x]=3;michael.x=michael.x+x;michael.y=michael.y+y;map[michael.y][michael.x]=10;drawWorld()}
var x=move[Math.floor(Math.random()*move.length)];var y=move[Math.floor(Math.random()*move.length)];if((map[daniel.y+x][daniel.x+y]!==1)&&(map[daniel.y+x][daniel.x+y]!==6)){map[daniel.y][daniel.x]=3;daniel.x=daniel.x+y;daniel.y=daniel.y+x;map[daniel.y][daniel.x]=7;drawWorld()}
if((map[vincent.y+y][vincent.x+x]!==1)&&(map[vincent.y+y][vincent.x+x]!==6)){map[vincent.y][vincent.x]=3;vincent.x=vincent.x+x;vincent.y=vincent.y+y;map[vincent.y][vincent.x]=8;drawWorld()}
if((map[melany.y+y][melany.x+x]!==1)&&(map[melany.y+y][melany.x+x]!==6)){map[melany.y][melany.x]=3;melany.x=melany.x+x;melany.y=melany.y+y;map[melany.y][melany.x]=11;drawWorld()}
},1);window.clearInterval(myInterval);drawWorld();console.log(map)
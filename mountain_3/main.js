left_num=0;
middle_num=0;
right_num=0;

window.onload=function(){
  left_num=Math.floor(Math.random()*14+2);
  do{
    middle_num=Math.floor(Math.random()*14+2);
  }while(left_num===middle_num);
  do{
    right_num=Math.floor(Math.random()*14+2);
  }while(right_num===middle_num || right_num===left_num);
  num_kousin();
}

function trancel_speak(comment){
  const p=document.getElementById("trancel");
  p.textContent=comment;
}
function txt_kousin(comment){
  const p=document.getElementById("txt");
  p.textContent=comment;
}
function num_kousin(){
  left_kousin();
  middle_kousin();
  right_kousin();
}
function left_kousin(){
  const p=document.getElementById("left");
  p.textContent=left_num;
}
function middle_kousin(){
  const p=document.getElementById("middle");
  p.textContent=middle_num;
}
function right_kousin(){
  const p=document.getElementById("right");
  p.textContent=right_num;
}

function btn1kousin(txt,func){
  const div=document.getElementById("btn1");
  div.setAttribute("value",txt);
  div.setAttribute("onclick",func);
}
function btn2kousin(txt,func){
  const div=document.getElementById("btn2");
  div.setAttribute("value",txt);
  div.setAttribute("onclick",func);
}
function btn3kousin(txt,func){
  const div=document.getElementById("btn3");
  div.setAttribute("value",txt);
  div.setAttribute("onclick",func);
}

function senkou(){
  trancel_speak("お前の番！");
  const div = document.getElementById("btn-wrapper");
  const input1 = document.createElement("input");
  input1.setAttribute("type","button");
  input1.setAttribute("class","btn");
  input1.setAttribute("id","btn3");
  div.appendChild(input1);
  player_turn();
}

function koukou(){
  const div = document.getElementById("btn-wrapper");
  const input1 = document.createElement("input");
  input1.setAttribute("type","button");
  input1.setAttribute("class","btn");
  input1.setAttribute("id","btn3");
  input1.setAttribute("value","(눈_눈)");
  div.appendChild(input1);
  trancel_turn();
}

function player_turn(){
  txt_kousin("どの山からとりますか？")
  btn1kousin("左の山","left_dec()");
  btn2kousin("真ん中の山","middle_dec()");
  btn3kousin("右の山","right_dec()");
}

function left_dec(){
  if(left_num===0){
    txt_kousin("その山はもう減らせません！");
  }
  else{
    txt_kousin("もっと減らしたければ「減らす」を押してください。");
    left_num-=1;
    left_kousin();
    btn1kousin("減らす","left_dec_number()");
    btn2kousin("終了","trancel_turn();");
    btn3kousin("(눈_눈)","")
  }
}
function left_dec_number(){
  if(left_num>0){
    left_num-=1;
  }
  left_kousin();
}

function middle_dec(){
  if(middle_num===0){
    txt_kousin("その山はもう減らせません！");
  }
  else{
    txt_kousin("もっと減らしたければ「減らす」を押してください。");
    middle_num-=1;
    middle_kousin();
    btn1kousin("減らす","middle_dec_number()");
    btn2kousin("終了","trancel_turn();");
    btn3kousin("(눈_눈)","")
  }
}
function middle_dec_number(){
  if(middle_num>0) middle_num-=1;
  middle_kousin();
}

function right_dec(){
  if(right_num===0){
    txt_kousin("その山はもう減らせません！");
  }
  else{
    txt_kousin("もっと減らしたければ「減らす」を押してください。");
    right_num-=1;
    right_kousin();
    btn1kousin("減らす","right_dec_number()");
    btn2kousin("終了","trancel_turn();");
    btn3kousin("(눈_눈)","");
  }
}
function right_dec_number(){
  if(right_num>0) right_num-=1;
  right_kousin();
}

function trancel_turn(){
  if(right_num===0 && middle_num===0 && left_num===0){
    trancel_speak("俺の負け......");
    txt_kousin("あなたの勝ちです！！おめでとう！！");
    btn1kousin("(눈_눈)......","");
    btn2kousin("(눈_눈)......","");
    btn3kousin("(눈_눈)......","");
  }
  else{
    trancel_algo(left_num,middle_num,right_num);
    if(right_num===0 && middle_num===0 && left_num===0){
      trancel_speak("俺の勝ち！！！！");
      txt_kousin("あなたの負けです");
      btn1kousin("(눈_눈)やーい","");
      btn2kousin("(눈_눈)やーい","");
      btn3kousin("(눈_눈)やーい","");
    }
    else{
      trancel_speak("はい！お前の番！");
      player_turn();
    }
  }
}

function trancel_algo(a,b,c){
/*  var a_tmp=a.toString(2);
  var b_tmp=b.toString(2);
  var c_tmp=c.toString(2);*/

  var x = a^b^c;

  if(x==0){
    var flag=0;
    var max=a;
    if(max<b){max=b; flag=1;}
    if(max<c){max=c; flag=2;}
    if(flag===0){left_num-=1;}
    else if(flag===1){middle_num-=1;}
    else if(flag===2){right_num-=1;}
    else{alert("error!! code=1 トランセルに報告下さい");}
  }
  else{
    /*
    if (a_tmp>(a_tmp^x)){
      left_num=parseInt(a_tmp^x,2);
    }
    else if(b_tmp>(b_tmp^x)){
      middle_num=parseInt(b_tmp^x,2);
    }
    else if(c_tmp>(c_tmp^x)){
      right_num=parseInt(c_tmp^x,2);
    }
    else{
      alert("error! code=2 トランセルに報告ください")
    }*/

    if(a>(a^x)){left_num=a^x;}
    else if(b>(b^x)){middle_num=b^x;}
    else if(c>(c^x)){right_num=c^x;}
    else{alert("error code=2");}

  }

  num_kousin();
}

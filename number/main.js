var now_num=0;
var out_num=0; //言ったら負けの数字、読み込み時に更新
//var num=0; //１ターンで言える数、読み込み時更新

window.onload=function(){
  out_num=Math.floor(Math.random()*20 + 40);
  //num=Math.floor(Math.random()*3 + 2);
  const p=document.getElementById("txt_up");
  p.textContent=`アウト数は${out_num}です。`;
  now_num_print(now_num);
}
function now_num_print(n){
  const p=document.getElementById("txt_now");
  p.textContent=`現在の数字は${n}です。`;
}
function trancel(comment){
  const p=document.getElementById("trancel");
  p.textContent=comment;
}

function senkou(){
  const div2 = document.getElementById("btn-wrapper");
  const input1 = document.createElement("input");
	input1.setAttribute("type","button");
	input1.setAttribute("class","btn");
  input1.setAttribute("id","btn3");
  div2.appendChild(input1);
  btn1kousin(now_num);
  btn2kousin(now_num);
  btn3kousin(now_num);
  trancel("お前が先行だ!始めてください!");
}
function koukou(){
  const div2 = document.getElementById("btn-wrapper");
  const input1 = document.createElement("input");
	input1.setAttribute("type","button");
	input1.setAttribute("class","btn");
  input1.setAttribute("id","btn3");
  div2.appendChild(input1);
  btn1kousin(now_num);
  btn2kousin(now_num);
  btn3kousin(now_num);
  trancel_turn(now_num);
}
function btn1kousin(n){
  const div=document.getElementById("btn1");
  div.setAttribute("value",`${n+1}`);
  div.setAttribute("onclick","syori1();");
}
function btn2kousin(n){
  const div=document.getElementById("btn2");
  div.setAttribute("value",`${n+1},${n+2}`);
  div.setAttribute("onclick","syori2();");
}
function btn3kousin(n){
  const div=document.getElementById("btn3");
  div.setAttribute("value",`${n+1},${n+2},${n+3}`);
  div.setAttribute("onclick","syori3();");
}

function trancel_turn(n){
  if(n>=out_num){
    trancel("俺の勝ち！なんで負けたか明日まで考えといてください！！");
    youlose1();
    youlose2();
    youlose3();
  }
  else if(n==out_num-1){
    trancel(`${out_num}、俺の負けです......`);
    youwin1();
    youwin2();
    youwin3();
  }
  else{
    var sep=(out_num-now_num-1)%4;
    if(sep==0) sep=Math.floor(Math.random()*3+1); //勝てないときはやけくそ
    if(sep==1){
      trancel(`俺のターン！！！${n+1}！`);
      now_num+=1;
    }
    else if (sep==2) {
      trancel(`俺のターン！！！${n+1},${n+2}！`);
      now_num+=2;
    }
    else {
      trancel(`俺のターン！！！${n+1},${n+2},${n+3}！`);
      now_num+=3;
    }
    now_num_print(now_num);
    btn1kousin(now_num);
    btn2kousin(now_num);
    btn3kousin(now_num);
  }
}

function syori1(){
  now_num+=1;
  now_num_print(now_num);
  trancel_turn(now_num);
}
function syori2(){
  now_num+=2;
  now_num_print(now_num);
  trancel_turn(now_num);
}
function syori3(){
  now_num+=3;
  now_num_print(now_num);
  trancel_turn(now_num);
}

function youwin1(){
  const div=document.getElementById("btn1");
  div.setAttribute("value","うれしい！");
  div.setAttribute("onclick","");
}
function youwin2(){
  const div=document.getElementById("btn2");
  div.setAttribute("value","うれしい！");
  div.setAttribute("onclick","");
}
function youwin3(){
  const div=document.getElementById("btn3");
  div.setAttribute("value","うれしい！");
  div.setAttribute("onclick","");
}

function youlose1(){
  const div=document.getElementById("btn1");
  div.setAttribute("value","くやしい");
  div.setAttribute("onclick","");
}
function youlose2(){
  const div=document.getElementById("btn2");
  div.setAttribute("value","くやしい");
  div.setAttribute("onclick","");
}
function youlose3(){
  const div=document.getElementById("btn3");
  div.setAttribute("value","くやしい");
  div.setAttribute("onclick","");
}

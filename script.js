// CALC LOGIC
var title=document.createElement("h1")
title.setAttribute("id","title")
title.innerHTML="Calculator"

var des=document.createElement("p")
des.setAttribute("id","description")
des.innerHTML="This is Calculator"

var container=document.createElement("container");
container.setAttribute("class","container")
document.body.append(container)

var pad = document.createElement("div");
pad.setAttribute("class","pad");
pad.querySelector(".pad")

var span = document.createElement("span");
span.setAttribute("class","text-right");
span.setAttribute("id","span")

var para = document.createElement("P");
para.setAttribute("class","content");
span.append(para)
 
var input = document.createElement("input")
input.setAttribute("id","result")
input.classList.add("text-right","form-control");

var bt7 = document.createElement("button");
bt7.setAttribute("id","7");
bt7.setAttribute("value","7");
bt7.classList.add("bg-dark","text-light")
bt7.innerHTML="7"
//bt7.document.getElementById("seven")


var bt8 = document.createElement("button");
bt8.setAttribute("id","8");
bt8.setAttribute("value","8");
bt8.classList.add("bg-dark","text-light")
bt8.innerHTML="8"
// bt8=document.getElementById("eight")


var bt9 = document.createElement("button");
bt9.setAttribute("id","9");
bt9.setAttribute("value","9");
bt9.classList.add("bg-dark","text-light")
bt9.innerHTML="9"
// bt9=document.getElementById("nine")


var btplus = document.createElement("button");
btplus.setAttribute("id","add");
btplus.setAttribute("value","+");
btplus.classList.add("bg-dark","text-light")
btplus.innerHTML="+"
// btplus=document.getElementById("plus")


var bt4 = document.createElement("button");
bt4.setAttribute("id","4");
bt4.setAttribute("value","4");
bt4.classList.add("bg-dark","text-light")
bt4.innerHTML="4"
// bt4=document.getElementById("four")


var bt5= document.createElement("button");
bt5.setAttribute("id","5");
bt5.setAttribute("value","5");
bt5.classList.add("bg-dark","text-light")
bt5.innerHTML="5"
// bt5=document.getElementById("five")


var bt6 = document.createElement("button");
bt6.setAttribute("id","6");
bt6.setAttribute("value","6");
bt6.classList.add("bg-dark","text-light")
bt6.innerHTML="6"
// bt6=document.getElementById("six")


var btsub = document.createElement("button");
btsub.setAttribute("id","subtract");
btsub.setAttribute("value","-");
btsub.classList.add("bg-dark","text-light")
btsub.innerHTML="-"
// btsub=document.getElementById("minus")


var bt1 = document.createElement("button");
bt1.setAttribute("id","1");
bt1.setAttribute("value","1");
bt1.classList.add("bg-dark","text-light")
bt1.innerHTML="1"
// bt1=document.getElementById("one")


var bt2 = document.createElement("button");
bt2.setAttribute("id","2");
bt2.setAttribute("value","2");
bt2.classList.add("bg-dark","text-light")
bt2.innerHTML="2"
// bt2=document.getElementById("two")


var bt3 = document.createElement("button");
bt3.setAttribute("id","3");
bt3.setAttribute("value","3");
bt3.classList.add("bg-dark","text-light")
bt3.innerHTML="3"
// bt3=document.getElementById("three")


var btmul = document.createElement("button");
btmul.setAttribute("id","multiple");
btmul.setAttribute("value","*");
btmul.classList.add("bg-dark","text-light")
btmul.innerHTML="*"
// btmul=document.getElementById("mul")


var btclr = document.createElement("button");
btclr.setAttribute("id","clear");
btclr.classList.add("bg-dark","text-light")
btclr.innerHTML="C"
// btclr=document.getElementById("clear")


var bt0= document.createElement("button");
bt0.setAttribute("id","zero");
bt0.setAttribute("value","0");
bt0.classList.add("bg-dark","text-light")
bt0.innerHTML="0"
// bt0=document.getElementById("zero")


var bteq = document.createElement("button");
bteq.setAttribute("id","equal");
bteq.classList.add("bg-dark","text-light")
bteq.innerHTML="="
// bteq=document.getElementById("equal")


var btdiv = document.createElement("button");
btdiv.setAttribute("id","division");
btdiv.setAttribute("value","/");
btdiv.classList.add("bg-dark","text-light")
btdiv.innerHTML="/"
// btdiv=document.getElementById("division")
pad.addEventListener("click", display)
btclr.addEventListener("click",clearHistory)
bteq.addEventListener("click",result)
let inp = document.querySelector(".pad")
let finalResult = document.querySelector("#result")
result.finalResult = ""

document.body.addEventListener("keypress",keypress)


document.body.append(title,des)
container.append(pad);
pad.append(span,input,bt7,bt8,bt9,btplus,bt4,bt5,bt6,btsub,bt1,bt2,bt3,btmul,btclr,bt0,bteq,btdiv);



function display(e){
     span=document.querySelector("#span")
    if(e.target.value===undefined){
        span.innerHTML = span.innerHTML+""
    }else{
        span.innerHTML = span.innerHTML+e.target.value;
    }
    
}

function clearHistory(){
    let span = document.querySelector("#span")
    let finalResult = document.querySelector("#result")
    span.innerHTML=""
    finalResult.value = "0"
}


function result(){
    let span = document.querySelector("#span"); 
    let finalResult = document.querySelector("#result")
    finalResult.value = eval(span.innerText); 
}

function calculation(num1,operator,num2){
    if(operator === "+"){
        return[num1+num2]
    }else if(operator === "-"){
        return num1-num2    
    }else if(operator === "*"){
        return num1*num2
    }else if(operator === "/"){
        return num1/num2
    }
}

function keypress(e){
    let span = document.querySelector("#span");
    if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" ){
        span.innerText += e.key
    }else if(e.key==="Enter"){
        result()
    }
}

let div=document.getElementById('result');
let txt=div.textContent;
txt=parseInt(txt);
function increment(){
    txt=txt+1;
    div.innerHTML=txt;
}
function decrement(){
    txt=txt-1;
    div.innerHTML=txt;
}
let input=document.getElementById('input');
let btn=document.getElementById('btn1');
btn.onclick=function(){
  if (input.value=="") {
    alert("User daxil edin")
  }
  else{
    let div=document.createElement('div');
    div.className="box";
    let h1=document.createElement('h1');
    let i =document.createElement('i');
    i.className="fa-solid fa-trash";
    let value=input.value;
    h1.innerHTML=value;
    document.querySelector('.button').appendChild(div);
    div.append(h1,i);
    i.onclick=()=>{
      i.parentElement.remove();
      alert("User silindi")
    }
    input.value=""
    }
  }


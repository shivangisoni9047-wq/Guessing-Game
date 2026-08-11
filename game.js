let btn=document.querySelector(".btn");
let heading=document.querySelector(".heading");
let input =document.querySelector("#userNo");
let body= document.querySelector("body");

let random = Math.floor(Math.random()*10)+1;
console.log(random);

function check(){
    let num = Number(input.value);
    num=Number(num);
    if(random == num){
        heading.innerText="Congratulations!!Your Guess is Correct :)";
        btn.style.display="none";
        input.style.display="none";
        body.classList.add("dark");
    }else{
        heading.innerText="Wrong Guess! Try Again..."
        input.value="";
    }
}

btn.addEventListener("click",()=>{
    check();
    
})

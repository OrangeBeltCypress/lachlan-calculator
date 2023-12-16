const text = document.querySelector(".text");
const parL = document.querySelector(".parL");
const parR = document.querySelector(".parR");
const mod = document.querySelector(".mod");
const clear = document.querySelector(".clear");
const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four=document.querySelector(".four");
const three=document.querySelector(".three");
const two=document.querySelector(".two");
const one=document.querySelector(".one");
const add=document.querySelector(".add");
const sub=document.querySelector(".sub");
const multiply=document.querySelector(".multiply");
const divide=document.querySelector(".divide");
const dot=document.querySelector(".dot");
const zero=document.querySelector(".zero");
const equals=document.querySelector(".equals");

let equation;

function changeText(num){
    //accidentally spelt inner with three n's
    text.innerHTML = text.innerHTML + num;
    equation = text.innerHTML
}

zero.addEventListener("click",()=>{
    changeText(0);
})

one.addEventListener("click",()=>{
    changeText(1);
})

two.addEventListener("click",()=>{
    changeText(2);
})

three.addEventListener("click",()=>{
    changeText(3);
})

four.addEventListener("click",()=>{
    changeText(4);
})

five.addEventListener("click",()=>{
    changeText(5);
})

six.addEventListener("click",()=>{
    changeText(6);
})
seven.addEventListener("click",()=>{
    changeText(7);
})
eight.addEventListener("click",()=>{
    changeText(8);
})
nine.addEventListener("click",()=>{
    changeText(9);
})
add.addEventListener("click",()=>{
    changeText(" + ");
})
sub.addEventListener("click",()=>{
    changeText(" - ");
})
multiply.addEventListener("click",()=>{
    changeText(" * ");
})

divide.addEventListener("click",()=>{
    changeText(" / ");
})

clear.addEventListener("click",()=>{
    text.innerHTML = " ";
    equation = "";
})

equals.addEventListener("click",()=>{
    text.innerHTML = eval(equation);
})

















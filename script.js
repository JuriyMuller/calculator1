const enter = document.querySelector(".button-enter");
let arr =[
document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
document.getElementById("4"),
document.getElementById("5"),
document.getElementById("6"),
document.getElementById("7"),
document.getElementById("8"),
document.getElementById("9"),
document.getElementById("0"),]
const output = document.getElementById("output");
 let arithmeticOperations=[
    document.getElementById('plus'),
    document.getElementById('multiplication'),
    document.getElementById('point'),
    document.getElementById('minus'),
    document.getElementById('division'),
    document.getElementById('bracket-l'),
    document.getElementById('bracket-r')

 ]
function decision(){
let 
expression = '';
arr.forEach(item=>{
    item.addEventListener("click",()=>{
        output.value += item.value;
        
expression+= item.value;
    })
});

arithmeticOperations.forEach(op=>{
    op.addEventListener("click",()=>{
         output.value+=op.value;
     
expression+=op.value
    })
})
document.getElementById("del").addEventListener("click",()=>{
    output.value='';
});


enter.addEventListener("click", ()=>{
let result = eval(expression);
output.value="";
output.value=result;
console.log(expression)
})
}
decision();
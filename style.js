var result=document.getElementById('input');


function calculate(number){

result.value+=number

}

function equal(){

try{ 
   result.value= eval(result.value);
}

catch (err){
alert("input is invalid")
}
}

function clr(){
    result.value=""
}

function del(){
    result.value=result.value.slice(0,-1)
}
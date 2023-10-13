"use strict"
var disp=document.getElementById('displayText');
var btn=document.getElementsByClassName('button');
var operand1=0;
var operand2=null;
var operator=null


for(var i=0; i<btn.length ; i++){
    btn[i].addEventListener('click', claculation)
}

var value=0;
function claculation(){
  
    
 
    
    
    value=this.getAttribute('data-value')
   if(value=='+' || value=='-' || value== '*' || value=='/'){

        if(operand1!=0 || operand1!=null){
        operator=value;
        operand1=parseFloat(disp.textContent);
        disp.innerText="";
        }
        else{
        return;
        }
   }

   else if(value=="+/-"){
    disp.innerText=  eval(`${parseFloat(disp.textContent)} * -1`) ;

   }
   else if(value=="%"){
    operand2=parseFloat(disp.textContent);
    operator="100";
    var result = eval(`${operand2} / ${operator}`);
    disp.innerText=result;


   }
   else if(value=="AC"){
    disp.innerText="";
    operand1=0;
    operand2=null;
    operator=null;

   }
   else if(value=="="){
    operand2=parseFloat(disp.textContent);

    var outputResult= eval(`${operand1} ${operator} ${operand2}`);
    disp.innerText=outputResult;

   }


   else{
    if(operand2!=null){
        disp.innerText="";
        operand2=null;
    }
    disp.innerText+=value;
   }
}
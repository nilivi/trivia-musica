document.getElementById("pagina2").style.display = "none";
document.getElementById("pagina3").style.display = "none";
document.getElementById("pagina4").style.display = "none";
document.getElementById("pagina5").style.display = "none";

function continuar() {
   const name2=document.getElementById("name").value;
   console.log(name2);
   document.getElementById("nick2").innerHTML = name2;
   document.getElementById("usuario").style.display = "none";
   document.getElementById("pagina2").style.display = "block";
}

  function rock(){
   document.getElementById("usuario").style.display = "none";
   document.getElementById("pagina4").style.display = "none";
   document.getElementById("pagina2").style.display = "none";
   document.getElementById("pagina5").style.display = "none";
   document.getElementById("pagina3").style.display = "block";
 }

 function salsa(){
   document.getElementById("usuario").style.display = "none";
   document.getElementById("pagina3").style.display = "none";
   document.getElementById("pagina2").style.display = "none";
   document.getElementById("pagina5").style.display = "none";
   document.getElementById("pagina4").style.display = "block";
 }

 document.getElementById('btnRock').addEventListener('click', function () {
  let p11,p12,p13, result;
  if(document.getElementById('r12').checked==true){
     p11=1
  }else{p11=0}
  if(document.getElementById('r14').checked==true){
    p12=1
 }else{p12=0}
 if(document.getElementById('r19').checked==true){
    p13=1
 }else{p13=0}
 result=p11+p12+p13;
 document.getElementById("resultadototal").innerHTML = "¡Tu puntaje fue " + result + " /3 puntos!";
 
  })

 document.getElementById('btnSalsa').addEventListener('click', function () {
  let p21,p22,p23, result1;
  if(document.getElementById('r22').checked==true){
     p21=1
  }else{p21=0}
  if(document.getElementById('r26').checked==true){
    p22=1
 }else{p22=0}
 if(document.getElementById('r27').checked==true){
    p23=1
 }else{p23=0}
 result1=p21+p22+p23;
 document.getElementById("resultadototal").innerHTML = "¡Tu puntaje fue " + result1 + " /3 puntos!";
 
  })

 function result(){
   document.getElementById("usuario").style.display = "none";
   document.getElementById("pagina3").style.display = "none";
   document.getElementById("pagina2").style.display = "none";
   document.getElementById("pagina4").style.display = "none";
   document.getElementById("pagina5").style.display = "block";
 
 }
 function uncheckrock(){
   document.getElementById("r11").checked = false;
   document.getElementById("r12").checked = false;
   document.getElementById("r13").checked = false;
   document.getElementById("r14").checked = false;
   document.getElementById("r15").checked = false;
   document.getElementById("r16").checked = false;
   document.getElementById("r17").checked = false;
   document.getElementById("r18").checked = false;
   document.getElementById("r19").checked = false;
 }  
 
 function unchecksalsa(){
   document.getElementById("r21").checked = false;
   document.getElementById("r22").checked = false;
   document.getElementById("r23").checked = false;
   document.getElementById("r24").checked = false;
   document.getElementById("r25").checked = false;
   document.getElementById("r26").checked = false;
   document.getElementById("r27").checked = false;
   document.getElementById("r28").checked = false;
   document.getElementById("r29").checked = false;
 }  

 function cerrar() {
   window.close();
 }
      
          
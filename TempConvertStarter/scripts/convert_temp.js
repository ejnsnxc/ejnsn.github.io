window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const F_input = document.getElementById("F_in");
   const C_input = document.getElementById("C_in");
   const convertBtn = document.getElementById("convertButton");

   F_input.addEventListener("input", clearC);
   C_input.addEventListener("input", clearF);

   convertBtn.addEventListener("click", convertTemp);
}


function clearC(){
   document.getElementById("C_in").value = "";
}
function clearF(){
   document.getElementById("F_in").value = "";
}

function convertTemp(){
   const F_input = document.getElementById("F_in");
   const C_input = document.getElementById("C_in");
   const message = document.getElementById("message");

   if(C_input.value.length > 0){
      message.textContent = "";
      const Ctemp = parseFloat(C_input.value);
      const Ftemp = convertCtoF(Ctemp);
      F_input.value = Ftemp;
      weatherIcon(Ftemp);
   }
   else if (F_input.value.length > 0){
      message.textContent = "";
      const Ftemp = parseFloat(F_input.value);
      const Ctemp = convertFtoC(Ftemp);
      C_input.value = Ctemp;
      weatherIcon(Ftemp);
   }
   else{
      message.textContent = "Enter a temperature to convert";
      weatherIcon(null);
   }
}


function convertCtoF(C) {
   return C * (9/5) + 32;
}

function convertFtoC(F) {
   return (F - 32) * (5/9);
}


function weatherIcon(Ftemp){
   const icon = document.getElementById("weatherIcon");

   if(Ftemp === null){
      icon.src = "images/C-F.png";
   }
   else if(Ftemp <= 32 && Ftemp > -200){
      icon.src = "images/cold.png";
   }
   else if(Ftemp >= 90 && Ftemp < 200){
      icon.src = "images/hot.png";
   }
   else if(Ftemp >= 200 || Ftemp <= -200){
      icon.src = "images/dead.png";
   }
   else{
      icon.src = "images/cool.png";
   }
}

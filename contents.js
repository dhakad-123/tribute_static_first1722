
document.getElementById("Personal-detail").style.display="block";
document.getElementById("Education").style.display="none";
document.getElementById("awards").style.display="none";
document.getElementById("books").style.display="none";
let b1=document.getElementById("Personal-detail");
let b2=document.getElementById("Education");
let b3=document.getElementById("awards");
let b4=document.getElementById("books");

function show1()
{
   if(b1.style.display=="none")
   {
      b1.style.display="block";  
      b2.style.display="none";
      b3.style.display="none";
      b4.style.display="none";
   }
}
function show2()
{
   if(b2.style.display=="none")
   {
      b2.style.display="block"; 
      b1.style.display="none"; 
      b3.style.display="none";
      b4.style.display="none";

   }
}
function show3()
{
   if(b3.style.display=="none")
   {
      b3.style.display="block"; 
      b1.style.display="none"; 
      b2.style.display="none"; 
      b4.style.display="none"; 
      

   }
}
function show4()
{
   if(b4.style.display=="none")
   {
      b4.style.display="block"; 
      b1.style.display="none"; 
      b3.style.display="none"; 
      b2.style.display="none";
   }
}

var count1 = 0;
var count2 = 0;
var num = document.querySelector("input");
var max = 0;



function incr1(){
    if(count1<max&&count2!=max)
       {
            count1++;
            document.querySelector("#p1").innerHTML=count1;
            if(count1==max&&count2!=max)
            document.querySelector("#p1").classList.add("winner");
       }
}



function incr2(){
    if(count2<max&&count1!=max)
       {
            count2++;
            document.querySelector("#p2").innerHTML=count2;
            if(count2==max&&count1!=max)
            document.querySelector("#p2").classList.add("winner");
       }
}



document.querySelector("#b1").addEventListener("click",incr1)
document.querySelector("#b2").addEventListener("click",incr2)



document.querySelector("#res").addEventListener("click",function(){
    document.querySelector("#p1").innerHTML=0;
    count1=0;
    document.querySelector("#p1").classList.remove("winner");
    document.querySelector("#p2").innerHTML=0;
    count2=0;
    document.querySelector("#p2").classList.remove("winner");


})



  num.addEventListener("change",function()
{
   document.querySelector("#to").textContent=Number(num.value);
   max = Number(num.value);
   reset();

})




function reset(){
  
        document.querySelector("#p1").innerHTML=0;
        count1=0;
        document.querySelector("#p1").classList.remove("winner");
        document.querySelector("#p2").innerHTML=0;
        count2=0;
        document.querySelector("#p2").classList.remove("winner");
        
    }




  


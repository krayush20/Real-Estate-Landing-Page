const spcl = document.querySelector(".special");

spcl.addEventListener("mouseover", function(){
    const conti = document.querySelector(".conti");
    conti.style.display="flex";
    setTimeout(()=>{
        conti.style.display='none';
    },5000)
})
const startingMinute = 2;
let time = startingMinute*60;
function updateCountDown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds ;
    
    time--;
    if((time == -2 ) ){
     // countDownTimer.innerHTML =`Süre: ${0} : ${0}`
     // alert(`Süreniz bitti. Oyunda kazandığınız toplam puan : ${totalPoint}`);
     if (confirm(`Süreniz bitti. Oyunda kazandığınız toplam puan : ${totalPoint}`)) {
       window.location.href = "/index.html";
   }
   else{
     window.location.href = "/index.html";  
   }
}
    
     
var t_minutes;
if (minutes<10) {
 t_minutes = "0" + minutes;
}
else {
 t_minutes = minutes;
}
countDownTimer.innerHTML =`Süre: ${t_minutes} : ${seconds}`



}
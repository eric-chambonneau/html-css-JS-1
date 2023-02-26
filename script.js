//les variables dont nous avons besoin
var sp, btn_start, btn_stop, t, ms, s, mn, h;
//la fonction pourinitialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName("sp");
    btn_start = document.getElementById("btn_start");
    btn_stop = document.getElementById("btn_stop");
    t = 0;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
   
}
//mettre en place le compteur
function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms = 0;
        s+=1;
    }
    if(s == 60){
        s = 0;
        mn+=1;
    }
    if(mn = 60){
        mn = 0;
        
    }
}

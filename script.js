//les variables dont nous avons besoin
var sp, btn_start, btn_stop, t, ms, s, mn, h;
//la fonction pourinitialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName("span");
    btn_start = document.getElementById("start");
    btn_stop = document.getElementById("stop");
    t;
    ms=0;
    s=0;
    mn=0;
    h=0;
   
}
//mettre en place le compteur
function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    //insertion des valeurs dans le span
    //[0] pour de sélectionner le premier span
    //[1] pour de sélectionner le deuxième span etc...

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";

}

//mettre en place la fonction le bouton start

function start(){
    //cette ligne permet de lancer la fonction update_chrono toutes les 100ms
    t =setInterval(update_chrono,100);
    btn_start.disabled = true;
    
}
//stopper le chrono
function stop(){
    clearInterval(t);//suppression de l'interval
    btn_start.disabled = false;
}

//réinitialiser le chrono
function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
    p[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

function addBoard(){
    for(var i = 0; i<8;++i){
        for(var j = 0; j< 8; ++j){
            if((i%2 == 0 && j%2 == 0) || (i%2!=0 && j%2!=0)){
                $("#board").append('<div class="s_kl"></div>');
            }
            else{
                $("#board").append('<div class="t_kl"></div>');
            }
        }
    }
}

function addDraughts(){
    $("div").filter(".t_kl").slice(0,12).append('<img src="images/tem_shashka.gif">');
    $("div").filter(".t_kl").slice(20,32).append('<img src="images/sv_shashka.gif">');
}
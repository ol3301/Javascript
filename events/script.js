function next(){
    if(fig1.style['background-color'] == "red"){
        fig1.style['background-color']="gray"
        fig2.style['background-color']="yellow";
    }
    else if(fig2.style['background-color']=="yellow"){
        fig2.style['background-color']="gray";
        fig3.style['background-color']="green";
    }
    else if(fig3.style['background-color']=="green"){
        fig3.style['background-color']="gray"
    }
    else{
        fig1.style['background-color']="red"
    }
}
function onTextChanged(e){
    t.value = t.value.replace(/\d/g,"");
}

function WindowWork(){
    window.alert("123");
}

function MClick(e){
    mm.style.left = e.pageX-50 + "px";
    mm.style.top = e.pageY-50 + "px";
}
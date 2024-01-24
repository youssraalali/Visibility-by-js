function move(movee,newtop,newleft){
    dom = document.getElementById(movee).style;
    dom.top = newtop + "px";
    dom.left = newleft + "px"; 
}
function push() {
    dom = document.getElementById("volcano").style;
    if(dom.visibility == "visible")
        dom.visibility = "hidden";
    else
    dom.visibility = "visible";
}
function last() {
    dom = document.getElementById("last").style;
    if(dom.visibility == "visible")
        dom.visibility = "hidden";
    else
    dom.visibility = "visible";
}

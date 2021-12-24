function showMsg(){
    var first = document.getElementById("first");
    var msg = document.getElementById("msg");

    first.style.transform="rotateY(180deg)"
    msg.style.transform="rotateY(360deg)"
    first.style.zIndex="-1"
    msg.style.zIndex="1"
}
function hiddenMsg(){
    var first = document.getElementById("first");
    var msg = document.getElementById("msg");

    first.style.transform="rotateY(0deg)"
    msg.style.transform="rotateY(180deg)"
    first.style.zIndex="1"
    msg.style.zIndex="-1"
}
function showMsg(){
    var first = document.getElementById("first");
    var msg = document.getElementById("msg");

    first.style.transform="rotateY(180deg)"
    msg.style.transform="rotateY(360deg)"
}
function hiddenMsg(){
    var first = document.getElementById("first");
    var msg = document.getElementById("msg");

    first.style.transform="rotateY(0deg)"
    msg.style.transform="rotateY(180deg)"
}
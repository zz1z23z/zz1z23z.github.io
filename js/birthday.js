
function link() {
  var name = document.getElementById("name").value;
  if (name == "lujia" || name == "卢佳") {
    window.location.href = "card.html";
  } else if (name === "zhaoguangyi" || name == "赵光仪") {
    alert("好感度+1？");
  } else if (name.indexOf("赵光仪") != -1 && name.indexOf("卢佳") != 1) {
    alert("我喜欢你！");
  } else {
    alert("不,你不是");
  }
}
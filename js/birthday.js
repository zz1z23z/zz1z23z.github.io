
  function link() {
    var name = document.getElementById("name").value;
    if(name == "lujia" || name == "卢佳"){
      window.location.href = "card.html";
    }else if(name === "zhaoguangyi" || name == "赵光仪"){
      alert("写我名字干嘛,这是为你做的");
    }else {
      alert("不,你不是");
    }
  }
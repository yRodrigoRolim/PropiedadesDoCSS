function fontsize(){
    var text = document.getElementById("font-text-preview");
    var input = document.getElementById("inputnumber").value;
    var select = document.getElementById("selectnumber");
    text.style.fontSize = input + select.value;
    document.getElementById("span1").innerHTML = input + select.value;
}
function fontweight(){
    var text = document.getElementById("font-text-preview");
    var input = document.getElementById("inputpeso").value;
    text.style.fontWeight = input;
    document.getElementById("span2").innerHTML = input;
}
function changefontcolor(){
    var text = document.getElementById("font-text-preview");
    var color = document.getElementById("font-color").value;
    document.getElementById("span3").innerHTML = color;
    text.style.color = color;
}
function selectfont(){
    var text = document.getElementById("font-text-preview");
    var select = document.getElementById("selectFont");
    text.style.fontFamily = select.value;
}
function myFunc2(){
    var width = document.getElementById("Width").value;
    var height = document.getElementById("Height").value;
    var div = document.getElementById("div1");
    var output1 = document.getElementById("output1");
    var output2 = document.getElementById("output2");
    output1.value = width + "px";
    output2.value = height + "px";
    div.style.width = width + "px";
    div.style.height = height + "px";
}
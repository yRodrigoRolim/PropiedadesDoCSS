function BorderConfig(){
    var border = document.getElementById("div-preview-border");
    var tmn = document.getElementById("tmborder").value;
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var type = document.getElementById("selectbordertype").value;
    var color = document.getElementById("border-color").value;  
    var radius = document.getElementById("rdborder").value;
    var configB = `${tmn}px ${type} ${color}`;
    border.style.border = configB;
    border.style.borderRadius = radius + "px";
    span1.innerHTML = `tamanho: ${tmn}px`
    span2.innerHTML = `Border-radius: ${radius}`
    console.log(configB);
}
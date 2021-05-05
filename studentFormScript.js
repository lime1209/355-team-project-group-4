let title = document.title;
let usscRow = document.getElementsByClassName("usscOnlyUse")[0];
let usscInputs = document.getElementsByClassName("ussc");

if(title == "Student Form"){
    
  console.log("babe");
    
    let blockedBorder = document.createElement("div");
    blockedBorder.id = "container";
    blockedBorder.className = "col-12 blocked";
    
    usscRow.appendChild(blockedBorder);
    console.log(blockedBorder)
    
    for(let i = 0; i < usscInputs.length; i++){
        usscInputs[i].setAttribute("disabled","disabled");
        
    }
    
}else{
    
}
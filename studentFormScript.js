let title = document.title;
let usscRow = document.getElementsByClassName("row usscOnlyUse")[0];
let usscInputs = document.getElementsByClassName("ussc");

let submission = document.getElementById("submitBtn");
let requiredInput = document.getElementsByClassName("reqInput");



if(title == "Student Form"){
    

    
    let blockedBorder = document.createElement("div");
    blockedBorder.className = "blocked";
    
    //usscRow.insertBefore(blockedBorder,usscRow.children[0]);
    //console.log(usscRow.children[1])
    
    for(let i = 0; i < usscInputs.length; i++){
        usscInputs[i].setAttribute("disabled","disabled");
        
    }
    
}


console.log("done");
                                 
                                                 
                                                   
submission.addEventListener("click", (e)=>{
   e.preventDefault();
   for(let i=0; i < requiredInput.length; i++){
       
       
       
       if(requiredInput[i].value == ""){
           
           alert("One or more fields are empty. Please make sure you have inputted your date, cunyfirstId, last and first name, mailing address, office 365 email address, home tel, cell telephone, signature, and date.");
           return;
       }else{
           
           alert("Submission success");
       }
   } 
    
    
    
    
});    


    let log_out = document.getElementById("logout");
    log_out.addEventListener("click", (event)=>{
        event.preventDefault();
        window.location.replace("login.html");
        
    })
                                                 




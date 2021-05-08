
var title = document.title;
let usscInputs = document.getElementsByClassName("ussc");
let submission = document.getElementById("submitBtn");
let requiredInput = document.getElementsByClassName("reqInput");

let form = document.getElementById("studentForm");


if(title == "Student Form"){
    

    console.log("this is the student form USSC inputs will be disabled for student");
  
    
    for(let i = 0; i < usscInputs.length; i++){
        usscInputs[i].setAttribute("disabled","disabled");
       

    
    };
    

  
    
    
    
    
    
let selectionTable = document.getElementById("Schedule");    
let selection0 = document.createElement("input"); 
let selection1 = document.createElement("input");  
let selection2 = document.createElement("input"); 
let selection3 = document.createElement("input");  
let selection4 = document.createElement("input"); 
    
selection0.type = 'checkbox';    
selection1.type = 'checkbox';    
selection2.type = 'checkbox';
selection3.type = 'checkbox';    
selection4.type = 'checkbox';    

   
    
var xhr = new XMLHttpRequest();
    xhr.open("POST", "connection_Courses.php");
     xhr.onload = function(){
         var data = this.response;
         
         var dataArr = data.split("?");
         
         
         let dataSeg;
         let courseDesc;  
         let courseCode;
         let year;
         let instructor;
         let grade;
         
         for(let i = 0; i < dataArr.length-1; i++){
             
              let trElement = document.createElement("tr");
             
              dataSeg = dataArr[i].split("|"); 
             
              courseDesc = dataSeg[0];
              courseCode = dataSeg[1];
              year = dataSeg[2];
              instructor = dataSeg[3];
              grade = dataSeg[4];
             
             
             let col = document.createElement("td");
             let col0 = document.createElement("td");
             let col1 = document.createElement("td");
             let col2 = document.createElement("td");
             let col3 = document.createElement("td");
             let col4 = document.createElement("td");
             
             if(i==0){
                 
                 col.appendChild(selection0);
                 
             }else if(i==1){
                       
                 col.appendChild(selection1);
            }else if(i==2){
                       
                 col.appendChild(selection2);
                 
            }else if(i==3){
                 
                  col.appendChild(selection3); 
                
             }else if(i==4){
                  
                 col.appendChild(selection4);
                 
             }
                      
                      
                      
                      
                      
                      
                      
                      
             col0.innerHTML = courseDesc;
             col1.innerHTML = courseCode;
             col2.innerHTML = year;
             col3.innerHTML = instructor;
             col4.innerHTML = grade;
             
             trElement.appendChild(col);
             trElement.appendChild(col0);
             trElement.appendChild(col1);
             trElement.appendChild(col2);
             trElement.appendChild(col3);
             trElement.appendChild(col4);
             
             
             selectionTable.appendChild(trElement);
             
             
         
     }
         
         
         
         
     };
    
   xhr.send();

    
    
    /*
 //course desc
     let col1 = document.getElementById("col1").childNodes;
//course id
     let col2 = document.getElementById("col2").childNodes;
//year
     let col3 = document.getElementById("col3").childNodes;
//isn
     let col4 = document.getElementById("col4").childNodes;
    
//grad
     let col5 = document.getElementById("col5").childNodes;
    ;
var hold = [false,false,false,false,false];    
    
    console.log(col1[1]);
    
  selection0.addEventListener("onchange", (e)=>{
      
      if(hold[0] == false){
          hold[0] = true;
      }else{
          hold[0] = false; 
      }
      
      
      if(hold[0]){
          
          
          
          
          
          
          
      }else{
          
          
          
          
      }
      
  });
    
    
    */
    
    
    
    
    
    
    
    
    
     
    
form.addEventListener("submit", (e)=>{
    
    
  
    for(let i=0; i < requiredInput.length; i++){
       
       e.preventDefault();
       
       if(requiredInput[i].value == ""){
           
           alert("One or more fields are empty. Please make sure you have inputted your date, cunyfirstId, last and first name, mailing address, office 365 email address, home tel, cell telephone, signature, and date.");
           return;
       }else{
           
           alert("Submission success");
           return;
       }
        
    }
    
}); 

                                                 
                                                   
submission.addEventListener("click", (e)=>{
    
});    
    
    


    let log_out = document.getElementById("logout");
    
    log_out.addEventListener("click", (event)=>{
        event.preventDefault();
        window.location.replace("login.html");
        
    });
                                                 


}
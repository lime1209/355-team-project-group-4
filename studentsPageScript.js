let log_out = document.getElementById("logout");
let start_appli = document.getElementById("start");
    
log_out.addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.replace("loginPage");
});
start_appli/addEventListener("click", (event)=>{
    event.preventDefault();
    window.location.replace("studentForm");
})

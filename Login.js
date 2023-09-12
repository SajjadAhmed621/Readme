function lgin(){
    const email =document.querySelector("#eml").value;
const password =document.querySelector("#pswrd").value
    if(email =="Sajjad621@gmail.com"  && password =="Sajjad"){
        
        window.location.href = "Task.html"
    }else{
        alert(`Wrong Email and password`)
    }
}
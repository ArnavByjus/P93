var US;

function fn_addUser(){
    US = document.getElementById("user_name").value;
    localStorage.setItem("name", US);
    window.location.replace("kwitter_room.html")
}

if(localStorage.getItem("name") != null && localStorage.getItem("name") != ""){
    document.getElementById("joining").innerHTML = "Welcome Back, " + localStorage.getItem("name") + "!";
    document.getElementById("user_name").value = localStorage.getItem("name");
}
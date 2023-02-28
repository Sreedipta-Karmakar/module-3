
let Taskbar = document.getElementsByClassName("Taskbar")[0]
let Startmenu = document.getElementsByClassName("Startmenu")[0]

Taskbar.addEventListener("click",()=>{
    console.log("Clicked");
    if(Startmenu.style.bottom == "50px"){
        Startmenu.style.bottom == "-655px"
    }
    else{
        Startmenu.style.bottom = "50px"
    }
})
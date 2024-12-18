function openSideBar(){
    document.getElementById("sideBar").style.display="block";
    document.getElementById("menu_button").style.display='none';
    // document.getElementsByClassName("main_Product").style.width='50%';
}

function closeSideBar(){
    document.getElementById("sideBar").style.display="none";
    document.getElementById("menu_button").style.display='block';
}


function edit(){
    document.getElementById("form_page").style.display='block';
    document.getElementById("form_page").style.right='25%';
    document.getElementById("main_Product").style.opacity="0.4";
    document.getElementById("main_Product").style.cursor="none";
}


function formClose(){
    
    document.getElementById("form_page").style.right='-700px';
    document.getElementById("form_page").style.display="none";
    document.getElementById("main_Product").style.opacity="1";
    document.getElementById("main_Product").style.cursor="auto";
    

}
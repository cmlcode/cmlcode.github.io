function changeDropdownVisibility(){
    var linksObj=document.getElementById("navbarLinks")

    if(linksObj.style.display == "block"){
        linksObj.style.display = "none";
    }
    else{
        linksObj.style.display = "block";
    }
}
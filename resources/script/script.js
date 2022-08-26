function DarkMode () {


    if (document.body.style.backgroundColor === "lightblue") 
    {
        document.body.style.backgroundColor = "#1c4d5d";
        document.getElementById("header1").style.color = "white";
        document.getElementById("header2").style.color = "white";
        document.getElementById("header3").style.color = "white";
    }
    
    else if (document.body.style.backgroundColor === "rgb(28, 77, 93)")
    {
        document.body.style.backgroundColor = "lightblue";
        document.getElementById("header1").style.color = "black";
        document.getElementById("header2").style.color = "black";
        document.getElementById("header3").style.color = "black";
    }
    
    else 
    {
        document.body.style.backgroundColor = "#1c4d5d";
        document.getElementById("header1").style.color = "white";
        document.getElementById("header2").style.color = "white";
        document.getElementById("header3").style.color = "white";
    }
}
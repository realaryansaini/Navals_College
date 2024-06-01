// let button = document.getElementById("menu")
// sidebar.right = "-100px"

let sidebar = document.getElementById("sidebar")
sidebar.style["right"] = "-100%"

const show_sidebar =()=>{
    
    
    // var element = document.getElementById("myElement");
    // var property = "display"; // Property to toggle
    var property = "right"
    var initialValue = sidebar.style[property]; // Get initial value
    // var toggleValue = initialValue === "-40vw" ? "0" : "-40vw"; // Toggle value
    if(initialValue == "-100%"){

        sidebar.style[property] = "0" // Set the property
        // console.log("run kiya");
    }else{
        sidebar.style[property] = "-100%" // Set the property
        // console.log("rundiya")

    }
    // sidebar.style[property] = toggleValue; // Set the property
}
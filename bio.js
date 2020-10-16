console.log("Hello World 42!");

$.ajaxSetup({
    cache: false,
})


function setup(){
    console.log("THe document is ready");
    
    $("#magic").click(buttonClick);
    $("#this").click(buttonClick2);
}

let toHide = true;
//button1
function buttonClick2(){
    console.log("This button was clicked!");
    if (toHide){
        $("#mypic").hide();
        
    } else{
        $("#mypic").show();
        toHide = true;
        
    }
    
}
    


//button2
function buttonClick(){
    console.log("Magic button clicked!");
}





//Tell jquery to run only when body is loaded

$(document).ready(setup);
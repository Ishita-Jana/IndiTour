


/*-----------------play-pause----------------*/

var myVideo = document.getElementById("play-pause");

function playPause(){
    if (myVideo.paused) 
            myVideo.play(); 
    else 
            myVideo.pause(); 

}

/*-----------------read-more----------------*/
function read(){
var dot = document.getElementById("dots");
var moreText = document.getElementById("more");
var read_more = document.getElementById("buttn-more");




    if(dot.style.display === "none"){
        dot.style.display = "inline";
        moreText.style.display = "none";
        read_more.innerHTML = "Read more" ;
    }
    else{
        dot.style.display = "none";
        moreText.style.display = "inline";
        read_more.innerHTML = "Read less";
    }
}

/**-----------dropdown-------- */


var dropdown1 = document.getElementById("dropdown-block1");
var dropdown2 = document.getElementById("dropdown-block2");

function dropdownList1(){
    
   
    if(dropdown1.style.display === "none" ){
        dropdown1.style.display = "block"; 
    }
    else{
        dropdown1.style.display = "none";
    }
}
function dropdownList2(){
    
    
    if(dropdown2.style.display === "none" ){
        dropdown2.style.display = "block"; 
    }
    else{
        dropdown2.style.display = "none";
    }
}

/*------------------filter-----------------------*/ 


// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("pop-dest-places");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }








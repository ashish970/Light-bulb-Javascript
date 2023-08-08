    //   4. Pillars of DOM in JavaScript

    //   1. Selection of an Element
    //   2. changing  HTML
    //   3. Changing CSS
    //   4. Event Listener


//    var s = document.querySelector("h1")     //used for the selection an element
//    console.log(s);

// var a = document.querySelector("h1")
// a.innerHTML = "This is Ashish Full Stack Developer"         //used for changing the element
// a.style.color = "red";
// a.style.backgroundColor = "black"
// a.style.fontSize = "100px"


// var a =document.querySelector("h1")

// a.addEventListener("click", function(){
//     console.log("Hey Everyone ");
// })

// a.addEventListener("click", function(){
//     alert ("I am Ashish")
//     a.innerHTML = "It's changed"
//     a.style.color = "blue"
//     a.style.backgroundColor = "#000"
//     a.fontSize = "60px"
// })


// write script to glow bulb

var bulb = document.querySelector ("#bulb")
var btn = document.querySelector("button")

var light = 0

btn.addEventListener("click", function(){
    if(light == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("Switched on");
        light = 1
    }
    else {
        bulb.style.backgroundColor = "black"
        console.log("clicked");
        light = 0
    }
})


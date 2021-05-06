document.querySelector("#event").addEventListener("click", function(e){
    console.log("event")
})

document.querySelector("#propagation").addEventListener("mouseover", function(e){
    console.log("propagation")
})

document.querySelector("#example").addEventListener("click", function(e){
    console.log(e.target.id)
})








// document.addEventListener("DOMContentLoaded", function(){
//     // alert("The DOM has loaded")
//    console.log("DAMN DUMB DOM")

//     // document.addEventListener("click", function(e){
//     //     console.log(e.target)
//     //     switch(e.target.id){
//     //         case("event"):
//     //         eventCallback()
//     //         break;
//     //         case("propagation"):
//     //         console.log("propagation")
//     //         break;
//     //         case("example"):
//     //         console.log("example")
//     //         break;
//     //         default:
//     //             console.log("default log")
//     //     }
//     // })

// //    let header = document.querySelector("h1")
// // //    console.log(header)

// //    header.addEventListener("mouseover", function(e){
// //        console.log(e.target)
// //        alert('hello world' )
// //         turnHeaderGold(e.target)
// //    })

// //    function turnHeaderGold(element){
// //        element.style.color = "goldenrod"
// //    }

// //    document.addEventListener("keydown", function(e){
// //         switch(e.keyCode){
// //             case(83):
// //             alert(e.key)
// //             break;
// //             case(68):
// //             alert(e.key)
// //             break;
// //             default:
// //         }
// //    })
// })



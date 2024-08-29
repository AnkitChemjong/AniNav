// let tl=gsap.timeline();
// let menu=document.querySelector("#menu");
// let cross=document.querySelector("#cross");


// menu.addEventListener("click", function(){
//     tl.to("#full",{
//          right:"0",
//          duration:1,
//          ease:"back.out"
//     })
//     tl.from("#full h4",{
//         opacity:0,
//         x:150,
//         stagger:0.5,
//         duration:0.7
//     })
// });

// cross.addEventListener("click", function(){
//     tl.to("#full h4",{
//         opacity:0,
//         x:150,
//         stagger:-0.5,
//         duration:0.7
//     })
//     tl.to("#full",{
//          right:"-40%",
//          duration:1,
//          ease:"back.out"
//     })
// });

//let tl=gsap.timeline({paused:true}); animatin will be paused
let tl=gsap.timeline();
let menu=document.querySelector("#menu");
let cross=document.querySelector("#cross");


tl.to("#full",{
    right:0,
    duration:0.5,
})
tl.from("#full h4",{
    x:150,
    duration:0.7,
    opacity:0,
    stagger:0.30,
})
tl.from("#full i",{
    opacity:0,
})
tl.pause();
menu.addEventListener("click", function(){
    tl.play();
});

cross.addEventListener("click", function(){
   tl.reverse();
});

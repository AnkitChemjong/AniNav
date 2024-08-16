function animate(){
    window.addEventListener("wheel",(e)=>{
        if(e.deltaY>0){
            gsap.to(".word",{
                transform:"translateX(-200%)",
                duration:5,
                ease:"none",
                repeat:-1,
            })
            gsap.to(".word i",{
                rotate:180
            })
        }
        else{
            gsap.to(".word",{
                transform:"translateX(0%)",
                duration:5,
                ease:"none",
                repeat:-1,
            })
            gsap.to(".word i",{
                rotate:0
            })
        }
    })
}
animate()
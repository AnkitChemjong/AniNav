import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { MdMenu } from 'react-icons/md';
import { GiCrossedBones } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
function App() {
  const menu=useRef();
  const mouseSVG=useRef();

// const randomX=gsap.utils.random(-500,500,10)
// const randomR=gsap.utils.random(-360,360,30)
// const randomY=gsap.utils.random(-200,200,30)

 
// const {contextSafe}=useGSAP();

// const rotateImg=contextSafe(()=>{
//   setCircleX(randomX);
//   setCircleY(randomY);
//   setRotate(randomR);
//   gsap.to(circleRef.current,{
//           x:circleX,
//           y:circleY,
//           duration:1,
//           ease:"back.out",
//           rotate:rotate
//        })
//  })


const {contextSafe}=useGSAP();
const bringMenu=contextSafe(()=>{
  const tl=gsap.timeline();
  tl.to(menu.current,{
    right:5,
    duration:1,
    ease:"back.in",
  })
  tl.fromTo(
    ".hel",
    { opacity: 0 ,
    x:100},
    {
      opacity: 1,
      x:0,
      duration:0.5,
      stagger: 0.5, 
      ease:"back.in",
    }
  );

})
const hideMenu=contextSafe(()=>{
  gsap.to(menu.current,{
    right:-300,
    duration:1,
    ease:"back.in",
  })
  
})
const onPositive=contextSafe(()=>{
 
  gsap.to(".word",{
    transform:"translateX(-200%)",
    duration:5,
    ease:"none",
    repeat:-1
  })
  gsap.to(".word>.h",{
      rotate:180
  })
  
})
const onNegative=contextSafe(()=>{

  gsap.to(".word",{
    transform:"translateX(0%)",
    duration:5,
    ease:"none",
    repeat:-1
  })
  gsap.to(".word>.h",{
      rotate:0
  })
  
})

useEffect(()=>{
  const func=()=>{
    hideMenu()
  }
document.addEventListener("mousedown",func)
return ()=>{
  document.removeEventListener("mousedown",func)
}

},[]);
useEffect(()=>{
  const func=(e)=>{
   
    if(e.deltaY>0){
      onPositive();
    }
    else{
      onNegative();
    }
  }
window.addEventListener("wheel",func)
return ()=>{
  window.removeEventListener("wheel",func)
}

},[]);
useEffect(()=>{
const initial='M 10 100 Q 500 100 990 100'
const func=(e)=>{
 
  const changed=`M 10 100 Q ${e.x} ${e.y} 990 100`
gsap.to(".hi",{
  attr:{d:changed},
  duration:0.3,
  ease:"power3.out"
})
}
const func2=(e)=>{

  gsap.to(".hi",{
    attr:{d:initial},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
})
}
mouseSVG.current.addEventListener("mousemove",func)
mouseSVG.current.addEventListener("mouseleave",func2)

return ()=>{
  mouseSVG.current.removeEventListener("mouseenter",func)
mouseSVG.current.removeEventListener("mouseleave",func2)
}
},[])




  return (
    <>
    <main className="w-[100vw] h-[100vh] relative bg-[url(https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat p-5">
      <nav className="flex flex-row items-center justify-between p-10">
        <h1 className="font-bold text-4xl">Adventure</h1>
        <MdMenu size={40} onClick={bringMenu}  className="cursor-pointer  hover:scale-150 transition-all duration-200"/>
      </nav>
      <div ref={menu} className="flex relative flex-col w-[20%] h-[550px] backdrop-blur-sm float-right -top-28 -right-72 justify-center items-center border-2 border-white rounded-lg">
       <GiCrossedBones onClick={hideMenu}  size={30} className="cursor-pointer hover:scale-150 transition-all duration-200 absolute top-5 right-5"/>
       <div className="flex flex-col gap-5">
        <h1 className="hel cursor-pointer hover:text-black hover:scale-150 transition-all duration-300 ">Home</h1>
        <h1 className="hel cursor-pointer hover:text-black hover:scale-150 transition-all duration-300 ">About</h1>
        <h1 className="hel cursor-pointer hover:text-black hover:scale-150 transition-all duration-300 ">Project</h1>
        <h1 className="hel cursor-pointer hover:text-black hover:scale-150 transition-all duration-300 ">Contact</h1>
       </div>
      </div>
    </main>
    <div className="letter w-[100vw] h-[100vh] relative -top-20 bg-slate-400 flex flex-col items-center justify-center ">
      <div className="w-[100vw] bg-yellow-400 flex flex-row gap-8">
        <div className=" word flex flex-row items-center justify-center py-6 gap-5 shrink-0 -translate-x-96">
          <h1 className="text-2xl">Hello man How are you</h1>
          <FaArrowRight className="h"  size={25}/>
        </div>
        <div className=" word flex flex-row items-center justify-center py-6 gap-5 shrink-0 -translate-x-96">
          <h1 className="text-2xl">Hello man How are you</h1>
          <FaArrowRight className="h"  size={25}/>
        </div>
        <div className="word flex flex-row items-center justify-center py-6 gap-5 shrink-0 -translate-x-96">
          <h1 className="text-2xl">Hello man How are you</h1>
          <FaArrowRight className="h"  size={25}/>
        </div>
        <div className="word flex flex-row items-center justify-center py-6 gap-5 shrink-0 -translate-x-96">
          <h1 className="text-2xl">Hello man How are you</h1>
          <FaArrowRight className="h"  size={25}/>
        </div>
        <div className="word flex flex-row items-center justify-center py-6 gap-5 shrink-0 -translate-x-96">
          <h1 className="text-2xl">Hello man How are you</h1>
          <FaArrowRight className="h"  size={25}/>
        </div>
        <div className="word flex flex-row items-center justify-center py-6 gap-5 shrink-0 -translate-x-96">
          <h1 className="text-2xl">Hello man How are you</h1>
          <FaArrowRight className="h"  size={25}/>
        </div>
        <div className="word flex flex-row items-center justify-center py-6 gap-5 shrink-0 -translate-x-96">
          <h1 className="text-2xl">Hello man How are you</h1>
          <FaArrowRight className="h"  size={25}/>
        </div>
        

      </div>

    </div>
    <div ref={mouseSVG} className=" w-[100vw] h-[100vh] relative bg-slate-400 flex flex-col items-center justify-center ">
    <svg width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
     <path className="hi" d="M 10 100 Q 500 100 900 100" stroke="black" fill="transparent"/>
    </svg>
    </div>
    </>
   
  )
}

export default App

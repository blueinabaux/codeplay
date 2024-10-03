import { useEffect } from "react";
import gsap from "gsap";

const ButtonHover = ({text, textSize}) => {
    useEffect(() => {
        
        const Btn = document.querySelector(".btn");
        
        Btn.addEventListener("mouseenter", () => {
            gsap.to(".btn", {
                    backgroundColor:"white",
                    color:"#181818",
                    border:"#181818",
                    ease:"power1.inOut"
                })
            });
            
            Btn.addEventListener("mouseleave", () => {
                gsap.to(".btn", {
                    backgroundColor:"transparent",
                    color:"white",
                    border:"",
                    ease:"power1.inOut"
                    
                })
            });
        },[]);
        
    return ( 
        <>
            <button className={`btn px-[2.2vw] py-[1.4vh] bg-transparent border-[1px] border-solid border-white text-white md:text-[${textSize}] rounded-full max-sm:px-[8vw] max-sm:text-[1.6vh] `}>
                {text}
            </button>
        </>
     );
}
 
export default ButtonHover;
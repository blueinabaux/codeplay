import gsap from "gsap";
import { useEffect } from "react";

const Tabs = ({ name }) => {
    useEffect(() => {
        const tabs = document.querySelectorAll(".tab-main");

        tabs.forEach((tab) => {
            tab.addEventListener("mouseenter", (event) => {
                gsap.to(event.currentTarget, {
                    backgroundColor: "white",
                    color: "#181818",
                    border: "#181818",
                    ease: "power1.inOut",
                });
            });

            tab.addEventListener("mouseleave", (event) => {
                gsap.to(event.currentTarget, {
                    backgroundColor: "transparent",
                    color: "white",
                    border: "",
                    ease: "power1.inOut",
                });
            });
        });

        // Clean up event listeners when component unmounts
        return () => {
            tabs.forEach((tab) => {
                tab.removeEventListener("mouseenter", null);
                tab.removeEventListener("mouseleave", null);
            });
        };
    }, []);

    return (
        <>
            <button className="tab-main px-[3vw] py-[2vh] max-sm: bg-transparent border-[1px] border-solid border-white text-white text-[1vw] rounded-full">
                {name}
            </button>
        </>
    );
};

export default Tabs;

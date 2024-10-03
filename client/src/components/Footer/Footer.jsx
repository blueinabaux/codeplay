const Footer = () => {
    return ( 
        <>
            <div className="footer-main h-[45vh] w-full flex flex-col justify-center items-center bg--800 ">
            <h2 className="text-[2.5vw] text-white max-sm:text-[4vh]" >CONTACT US</h2>

                <div className="all-contacts h-auto w-full flex max-sm:flex-col max-sm:gap-[3vh] justify-center items-center py-[5vh]">
                <div className="gitesh h-auto w-full flex flex-col justify-center items-center">
                    <p className="text-[1.5vw] text-white max-sm:text-[2.5vh] font-semibold ">GITESH PATIL</p>
                    <p className="text-[1vw] text-white max-sm:text-[2vh] font-semibold ">+91 8999813108 </p>
                </div>

                <div className="gitesh h-auto w-full flex flex-col justify-center items-center">
                    <p className="text-[1.5vw] text-white max-sm:text-[2.5vh] ">SHREYAS SHIRWADKAR</p>
                    <p className="text-[1vw] text-white max-sm:text-[2vh] font-semibold ">+91 7666521232</p>
                </div>
                
                </div>
            </div>
        </>
     );
}
 
export default Footer;
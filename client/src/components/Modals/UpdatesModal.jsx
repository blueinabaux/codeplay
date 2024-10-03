import { IoCloseOutline } from "react-icons/io5";

const UpdatesModal = ({ stat = "hidden", closeModal }) => {
    const updates = [
        {
            id:1,
            upd:"Registrations starting Soon !"
        }
    ];

    const closeFunc = () => {
        stat="hidden";
        console.log("CLOSE PRESSED");
    }
    return ( 
        <>
            <div className={`update-modal z-[10000] fixed top-0 h-[100vh] w-[100vw] bg-[#18181842] ${stat} justify-center items-center backdrop-blur-[5px] `}>
                <div className="main-modal h-[80%] w-[80%] bg-zinc-700 flex flex-col justify-start items-start px-[2vw] py-[3vh] max-sm:py-[1vh] max-sm:w-[90%] rounded-[2vh] ">
                    <div className="up-text h-[20%] w-full flex justify-between items-center max-sm:px-[3vw]  ">
                        <p className="text-white text-[3vw] max-sm:text-[3vh] font-semibold " >LATEST UPDATES</p>
                        <IoCloseOutline onClick={closeModal} className=" cursor-pointer" size={30} color="white" />
                    </div>
                    <div className="updates-cont h-[80%] w-full bg-zinc-700 flex justify-center items-start overflow-y-scroll ">
                        <div className="scroll-updates updates-cont min-h-auto w-full bg--700 flex flex-col justify-start items-start gap-[2vh]">
                            {
                                updates.map((up,id) => {
                                    return(
                                        <>
                                            <div className="upd-cont h-auto w-[100%] bg-yellow-600 flex justify-between items-center px-[1.5vw] py-[4vh] rounded-[1vh] max-sm:px-[3vw] max-sm:py-[3vh] ">
                                                <p className=" max-sm:text-[2vh] font-semibold text-white text-[1.3vw]" >{up.upd}</p>
                                                {/* <button
                                                    className={`btn px-[2.2vw] py-[1.4vh] bg-transparent border-[1px] border-solid border-white text-white md:text-[0.9vw] rounded-full max-sm:px-[8vw] max-sm:text-[1.6vh]  hover:bg-white hover:text-yellow-600 max-sm:hidden `}>
                                                    CHECK
                                                </button> */}
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default UpdatesModal;
import ButtonHover from "../Button/ButtonHover";
import { useDispatch } from "react-redux";
import { seeAll } from "../../redux/slices/archiveSlice"; // Import the seeAll action
import { useNavigate } from "react-router-dom";

import img from "../../assets/image.png";

const ArchivesCard = ({ Name, year, winners, ps, gallery }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toPage = () => {
    navigate("/arcDesc");
  };

  return (
    <>
      <div className="arc-card h-[60vh] w-[40vw] max-sm:w-[90vw] max-sm:h-[40vh] bg--400 flex flex-col justify-center items-center ">
        <div className="arc-image h-[80%] w-full ">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </div>
        <div className="arc-content h-[20%] w-full flex justify-between items-center px-[0vw]">
          <h2 className="text-white max-sm:text-[1.4vh] ">
            TECH-FIESTA {year}
          </h2>

          <button
            onClick={() => {
              dispatch(
                seeAll({
                  name: Name,
                  year: year,
                  winners: winners,
                  problemStatements: ps,
                  gallery: gallery,
                })
              );
              setTimeout(() => {
                toPage(); 
              }, 100); 
            }}
            className={`btn px-[2.2vw] py-[1.4vh] bg-transparent border-[1px] border-solid border-white text-white text-[0.8vw] rounded-full max-sm:px-[8vw] max-sm:text-[1.6vh]`}
          >
            SEE ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default ArchivesCard;

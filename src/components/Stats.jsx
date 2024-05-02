import Lottie from "lottie-react";
import jumpingBar from "../../public/Animation - 1714569145977.json";
import LockAnime from "../assets/Animation - 1714629249466.json";
import StarAnime from "../assets/Animation - 1714630119167.json";

const Stats = () => {
  return (
    <div className="bg-purple-400 my-36">
      <div className="py-8 grid grid-cols-1 md:grid-cols-3">
        <div className="h-64 p-4 flex flex-col justify-center items-center text-center">
          <Lottie className="h-40" animationData={jumpingBar} setSpeed={9} />
          <p className="text-3xl font-extrabold text-white">Over 9k Users</p>
        </div>
        <div className="h-64 p-4 flex flex-col justify-center items-center text-center">
          <Lottie className="h-40" animationData={LockAnime} setSpeed={9} />
          <p className="text-3xl font-extrabold text-white">
            Over 500 sale per day
          </p>
        </div>
        <div className="h-64 p-4 flex flex-col justify-center items-center text-center">
          <Lottie className="h-40" animationData={StarAnime} setSpeed={9} />
          <p className="text-3xl font-extrabold text-white">
            Over $5000 Transactions per month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

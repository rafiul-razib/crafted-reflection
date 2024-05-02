import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Payment = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <span className="text-4xl text-red-600 my-8">
        <Typewriter
          words={["Payment system coming soon..."]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <Link to={"/"}>
        <button className="btn glass bg-yellow-500">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default Payment;

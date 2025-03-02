import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const NotFound = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl text-red-600 my-8">Oops, Page not found: 404</h1> */}
      <span className="text-4xl text-red-600 my-8">
        <Typewriter
          words={["Oops, Page not found: 404"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          // onLoopDone={handleDone}
          // onType={handleType}
        />
      </span>
      <Link to={"/"}>
        <button className="btn glass bg-yellow-500">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

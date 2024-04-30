import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl text-red-600 my-8">Oops, Page not found: 404</h1>
      <Link to={"/"}>
        <button className="btn glass bg-yellow-500">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

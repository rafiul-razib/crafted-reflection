import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithGoogle, login, signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "Logged in successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100 rounded-none">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-600 glass text-white">
                Login
              </button>
            </div>
            <div className="flex justify-center gap-8">
              <button onClick={handleGoogleSignIn} className="btn btn-trans">
                <FaGoogle className="text-xl" />
              </button>
              <button onClick={handleGitHubSignIn} className="btn btn-trans">
                <FaGithub className="text-xl" />
              </button>
            </div>

            <label className="label">
              <p>
                Do not have an account?{" "}
                <span className="text-blue-600">
                  <Link to={"/register"}>Register here</Link>
                </span>
              </p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

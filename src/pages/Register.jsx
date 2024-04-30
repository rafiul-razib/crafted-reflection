import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { register } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password should be at least 6 character long",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password should contain at least 1 uppercase, 1 lowercase and a Number!",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    // const user = { name, email, photo, password };
    register(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          Swal.fire({
            title: "Success!",
            text: "User registered in successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        });

        console.log(result.user);
      })

      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };

  return (
    <div className="bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo url"
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
                Register
              </button>
            </div>

            <label className="label">
              <h5>
                Already have an account?{" "}
                <span className="text-blue-600">
                  <Link to={"/login"}>Login here</Link>
                </span>{" "}
              </h5>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

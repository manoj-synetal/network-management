import React, { useState } from "react";
import LoginWall from "../../assets/LoginWall.png";
import SimpleReactValidator from "simple-react-validator";
import ShowError from "../../common/ShowError";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const validator = new SimpleReactValidator();
  const [formInput, setFormInput] = useState({});

  // handleChange
  const handleChange = (event) => {
    setErrors({ ...errors, [event.target.name]: "" });
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validator.allValid()) {
      navigate("/dashboard");
    } else {
      validator.showMessages();
      setErrors(validator.errorMessages);
    }
  };
  return (
    <div className="bg-secondary h-screen overflow-hidden ">
      <section className="w-full bg-white h-full shadow flex">
        <div className="lg:w-1/3 md:w-2/5 relative h-full flex justify-center">
          <div className="bg-primary-light h-full w-full"></div>
          <img src={LoginWall} alt="" className="absolute top-32 w-72" />
        </div>
        <div className="bg-white grid items-center h-full lg:w-2/3 mx-auto md:px-40 md:w-3/5">
          <form
            onSubmit={handleSubmit}
            className="tracking-wide gap-4 w-full grid"
          >
            <div>
              <p className="text-secondary font-normal">Welcome Back 👋</p>
              <h3 className="text-lg font-medium ">Login to your account</h3>
            </div>
            {/* Email */}
            <div className="gap-1 grid">
              <label className="block text-sm font-medium  " htmlFor="email">
                Email
              </label>
              <input
                autoComplete="off"
                id="email"
                className="block w-full px-3 py-2 bg-secondary text-sm border-gray-300 outline-none  border-2 rounded"
                type="text"
                value={formInput?.email}
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
              {validator.message("email", formInput?.email, "required|email")}
              <ShowError data={errors.email} />
            </div>
            {/* Password */}
            <div className="gap-1 grid">
              <label className="block text-sm font-medium  " htmlFor="password">
                Password
              </label>

              <div className="flex gap-2 text-sm border-gray-300 border-2 bg-secondary rounded px-3 items-center">
                <input
                  autoComplete="off"
                  id="password"
                  className="block w-full bg-transparent py-2 outline-none"
                  type={show ? "text" : "password"}
                  value={formInput?.password}
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="text-lg cursor-pointer text-gray-400 text-color"
                >
                  {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
              {validator.message("password", formInput?.password, "required")}
              <ShowError data={errors.password} />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              // disabled={loading}
              className="bg-primary mt-1 p-2 rounded text-white "
            >
              Log In
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;

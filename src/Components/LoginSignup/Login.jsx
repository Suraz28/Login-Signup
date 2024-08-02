import React from "react";
import {
  FaRegUser,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormContext } from "./Context";

const LogIn = () => {
  //import then variables and functions from context file
  const {
    name,
    setName,
    email,
    password,
    setPassword,
    ispasswordVisible,
    Toggle,
    handleSubmit,
    handleFields,
    isChecked,
    setIsChecked,
    Data,
    loginmessage,
    RevokeLogin,
  } = useFormContext();

  const openGoogleSignIn = () => {
    window.open(
      "https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=ARZ0qKLifRdybor3dLBnn9imPF8C-NuNLgOsejgxwVIeeZN2osYjRWGzFC5571R47jCCDWUUBSj-xg&theme=glif&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
      "_blank"
    );
  };
  const openFacebookSignIn = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  return (
    <div className="bg-orange-200 flex justify-center items-center h-screen">
      <div
        className=" h-auto w-80 p-8 rounded-md border border-solid border-opacity-10 shadow-xl"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col justify-between items-center">
          <div className="flex justify-start w-full">
            <h1 className="text-2xl font-bold">LogIn</h1>
          </div>
          <form className="w-full pt-8" onSubmit={handleSubmit}>
            <span className="text-sm">{loginmessage}</span>
            <div className="relative flex flex-col justify-center items-start gap-3">
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md bg-gray-50 h-10 pl-4 pr-4 border focus:outline-none focus:outline-white"
                required
              />
              <FaRegUser className="absolute top-3 transform-translate-y-1/2 right-3 text-gray-600" />
              <input
                type={ispasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-gray-50 h-10 pl-4 pr-4 border focus:outline-none focus:outline-white"
                required
              />
              {ispasswordVisible ? (
                <FaEyeSlash
                  className="absolute top-1/2 transform-translate-y-1/2 right-3 text-gray-600"
                  onClick={Toggle}
                />
              ) : (
                <FaEye
                  className="absolute top-1/2 transform-translate-y-1/2 right-3 text-gray-600"
                  onClick={Toggle}
                />
              )}
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="cursor-pointer"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="rememberMe" className="text-sm">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="flex flex-col items-center pt-5">
              <button
                type="submit"
                className="bg-gray-800 hover:bg-black text-white rounded-md p-2 w-full"
                onClick={RevokeLogin}
              >
                LogIn
              </button>
              <a
                href="#"
                className="text-blue-500 hover:text-red-700 underline"
              >
                <span className="text-sm">Forgot Password?</span>
              </a>
            </div>
            <div className="flex justify-center items-center p-8">
              <div className="flex-grow border-t border-black items-center"></div>
              <p className="px-2 text-gray-600">or</p>
              <div className="flex-grow border-t border-black items-center"></div>
            </div>
          </form>
          <div className="flex flex-col items-center gap-1 pt-2 w-full">
            <button
              type="submit"
              className="bg-gray-800 hover:bg-black text-white rounded-md p-2 w-full flex items-center gap-2 justify-center"
              onClick={openGoogleSignIn}
            >
              <FaGoogle />
              Continue with Google
            </button>
            <button
              type="submit"
              className="bg-gray-800 hover:bg-black text-white rounded-md p-2 w-full flex items-center justify-center gap-2"
              onClick={openFacebookSignIn}
            >
              <FaFacebook className="text-lg" />
              Continue with Facebook
            </button>
          </div>
          <Link
            to="/SignUp"
            className="pt-4 text-blue-500 hover:underline"
            onClick={handleFields}
          >
            Don't have an account? SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

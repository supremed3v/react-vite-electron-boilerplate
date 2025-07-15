import React from "react";
import appPreview from "../../../assets/app-preview.png";
import appPreview2 from "../../../assets/app-preview2.png";

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gradient-to-b from-[#e8d9c2] to-[#2e2e3a]">
      <div className="w-full max-w-8xl flex justify-center items-center">
        {/* Left Box - Login/Signup Area */}
        <div className="w-1/4 p-8 bg-transparent bg-opacity-90 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-100">
            Login/Signup to Your Account
          </h1>
          <h1 className="text-3xl font-bold mb-4 text-gray-100">
            Login/Signup to Your Account
          </h1>
          <h1 className="text-3xl font-bold mb-4 text-gray-100">
            Login/Signup to Your Account
          </h1>
        </div>

        {/* Right Box - Images Area */}
        <div className="w-3/4 p-8 bg-transparent bg-opacity-90 flex items-center justify-center">
          {/* Side by Side */}
          <div className="flex w-full justify-between gap-4 items-center">
            <div className="p-4 bg-transparent w-1/2 flex items-center justify-center">
              <img
                src={appPreview}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                alt="App Preview 1"
              />
            </div>
            <div className="p-4 bg-transparent w-1/2 flex items-center justify-center">
              <img
                src={appPreview2}
                className="w-full h-64 object-contain rounded-lg shadow-lg"
                alt="App Preview 2"
                style={{
                  filter: "grayscale(100%)",
                  opacity: 0.8,
                  height: "240px",
                  objectFit: "cover",
                  animation: "fadeIn 1s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

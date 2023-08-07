import React from "react";

const Divcontainer = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <div className="flex gap-8">
          <div className="relative block">
            <div className="border-2 w-80 h-48 rounded-bl-[140px] border-[#DE6B48]">
              <h1 className="absolute text-2xl top-4 right-4">React Js</h1>
            </div>
          </div>
          <div className="h-48 w-0 border-l-2 border-[#fff]"></div>
          <div className="relative block">
            <div className="border-2 w-64 h-48 rounded-tl-[140px] border-[#DE6B48]">
              <h1 className="absolute text-2xl top-4 right-4">Next JS</h1>
            </div>
          </div>
        </div>
      </div>
      {/* */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-8">
          <div className="relative block">
            <div className="border-2 w-64 h-48 rounded-br-[140px] border-[#DE6B48]">
              <h1 className="absolute text-2xl top-4 left-4">Python</h1>
            </div>
          </div>
          <div className="h-48 w-0 border-l-2 border-[#fff]"></div>
          <div className="relative block">
            <div className="border-2 w-80 h-48 rounded-tr-[140px] border-[#DE6B48]">
              <h1 className="absolute text-2xl top-4 left-4">JavaScript</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Divcontainer;

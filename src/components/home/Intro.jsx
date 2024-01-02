import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-32 md:py-28 md:flex ">
      <div className="hidden md:block md:w-1/2 float-left">
        <div className="w-2/3 flex flex-col gap-y-6">
          <div>
            <p className="font-semibold text-3xl">
              <span className="text-orange-600">Hire super Humans</span>
              <br />
              <span>Hire teams instead of employees</span>
            </p>
          </div>
          <div>
            <p className="font-medium text-sm">
              We assign to Companies for all Remote Jobs and project covering
              Everything From Software enginnering To sales
            </p>
          </div>
          <div className="flex gap-x-8">
            <button className="px-6 py-2 text-white bg-orange-600 font-semibold rounded-md">
              Fill form
            </button>
            <button className="px-6 py-2 bg-white border-2 border-orange-500 font-semibold rounded-md">
              Book call
            </button>
          </div>
        </div>
      </div>

      <div className="block md:hidden md:w-1/2 float-left">
        <div className="mt-16 flex flex-col gap-y-6 px-5">
          <div>
            <p className="font-semibold text-3xl">
              <span className="text-blue-600">Empower </span>
              <span>Your Vision with Our Team</span>
            </p>
          </div>
          <div>
            <p className="font-medium text-sm">
              Elevate Your Success! Hiring our dedicated and dynamic team
              guarantees innovation, efficiency, and unparalleled expertise. Let
              us drive your project to new heights and achieve extraordinary
              results together. Ready to embark on a journey of success? Let's
              make it happen!"
            </p>
          </div>
          <div className="flex gap-x-8 my-10">
            <button className="px-6 py-2 text-white bg-blue-600 font-semibold rounded-md text-sm">
              Hire our team
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 h-72 float-end  mx-auto gap-3 columns-2 px-3 ">
        <img
          src="images/intro_blob.png"
          alt="intro-blob"
          className="w-[330px] md:w-72 h-96 md:h-auto absolute right-0 md:top-[250px] -z-20"
        />
        <div className="z-10 h-96">
          <div className="flex flex-col gap-y-5">
            <div className="">
              <img src="images/intro-1.png" alt="intro-1" className="h-40" />
            </div>
            <div>
              <img src="images/intro-4.png" alt="intro-1" className=" w-52" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-5">
              <div>
                <img
                  src="images/intro-2.png"
                  alt="intro-1"
                  className="w-28 h-24"
                />
              </div>
              <div className=" w-20 rounded-md bg-slate-300"></div>
            </div>
            <div>
              <img
                src="images/intro-5.png"
                alt="intro-1"
                className="w-96 h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

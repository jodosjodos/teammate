import React from "react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  return (
    <div className=" md:w-full flex flex-col mt-20 md:mt-0 p-5 md:px-10">
      <div className="flex flex-col items-center pb-5">
        <p className="text-2xl text-blue-600 font-semibold">About</p>
        <p className="text-sm text-[#707070]">
          What make us special to be choosen by our clients
        </p>
        <div className="sm:hidden md:block lg:block">
          <img src="images/aboutEclipse.png" alt=" eclipse" />
        </div>
      </div>
      <div className="py-5 flex lg:flex-row md:flex-row sm:flex-col  items-center lg:gap-12 md:gap-0">
        <div className=" flex-1">
          <img
            src="images/about-1.png"
            alt="about-1"
            className="lg:w-[80%] md:w-full sm:w-full"
          />
        </div>

        <div className=" relative md:w-[50%] flex flex-col md:flex-none flex-1">
          <div className=" pt-8 ml-5 md:pt-0">
            <p className="text-sm text-[#393939] leading-96">
              We Assign Teams To Companies For All Remote Jobs And Projects,
              Covering Everything From Software Engineering To Sales. Each Team
              Comes With A Team Manager Who Is Responsible For All
              Communication, He Is Like A Superhuman Because He Is A Employee
              Who Can Do The Work Of Hundreds. We Have Collaborated With
              Numerous Companies To Become Experts In Delivering Top- Tier
              Services For Remote Projects And Jobs. This Not Only Saves You
              Money But Also Precious Time And Effort In Hiring, Managing And
              Communication With Numerous People.
            </p>
          </div>
          <div className="pt-10 flex justify-between md:px-10">
            <div className="flex flex-col items-center">
              <img
                src="images/companies.svg"
                alt="companies-svg"
                className="w-10 gap-y-1"
              />
              <p className="font-bold text-xl text-blue-600">50+</p>
              <p className="">Companies</p>
            </div>
            <div className="flex flex-col items-center text-sm">
              <img
                src="images/teams.svg"
                alt="teams-svg"
                className="w-10 gap-y-1"
              />
              <p className="font-bold text-xl text-blue-600">100+</p>
              <p>Teams</p>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <img
                src="images/completed.svg"
                alt="completed-svg"
                className="w-9"
              />
              <p className="font-bold text-xl text-blue-600">1000+</p>
              <p>Completed project</p>
            </div>
          </div>
          <div className=" absolute self-end right-[10%] lg:top-[25%] md:top-[30%] sm:bottom-[15%] md:w-[20%] sm:w-[20%]">
            <img src="images/aboutEclipse2.png" alt="" className="w-full"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

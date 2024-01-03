import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Intro = () => {
  const navigate = useNavigate()
  const shadowStyle = {
    boxShadow: "0px 8.309572219848633px 34.27698516845703px 0px #00000024",
  };
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleModel = () => {
    setIsModelOpen((prev) => !prev);
  };
  const directUser=()=>{
    navigate("/booking")
  }
  return (
    <div className={`relative  ${isModelOpen ? " py-36" : "py-0"}`}>
      <div
        className={`flex flex-row justify-between md:flex-row md:py-28 md:flex sm:flex-col ${
          isModelOpen ? "z-10 opacity-15 blur-sm" : "z-50"
        }`}
      >
        <div className="hidden md:block lg:block  p-10 flex-1">
          <div className=" flex flex-col gap-y-6">
            <div>
              <p className="font-semibold text-3xl">
                <span className="text-[#0064E1]">Hire super Humans</span>
                <br />
                <span>Hire teams instead of employees</span>
              </p>
            </div>
            <div>
              <p className="font-medium text-sm">
                We assign to Companies for all Remote Jobs and project covering
                Everything From Software engineering To sales
              </p>
            </div>
            <div className="flex gap-x-8">
              <Link
                to="/form"
                className="px-6 py-2 text-white bg-[#0064E1] hover:border-2 hover:bg-white hover:border-[#0064E1] hover:text-[#0064E1] font-semibold rounded-md"
              >
                Fill form
              </Link>
              <button
                onClick={handleModel}
                className={` ${
                  isModelOpen ? "hidden" : "block"
                } px-6 py-2 bg-white border-2 border-[#0064E1] text-[#0064E1] hover:bg-[#0064E1] hover:text-white font-semibold rounded-md`}
              >
                Book call
              </button>
            </div>
          </div>
        </div>

        <div className="block md:hidden lg:hidden">
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
                guarantees innovation, efficiency, and unparalleled expertise.
                Let us drive your project to new heights and achieve
                extraordinary results together. Ready to embark on a journey of
                success? Let's make it happen!"
              </p>
            </div>
            <div className="flex gap-x-8 my-10">
              <button className="px-6 py-2 text-white bg-blue-600 font-semibold rounded-md text-sm">
                Hire our team
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-5">
          <img
            src="images/superHumans.png"
            alt="super human"
            className="w-full"
          />
        </div>
      </div>
      {isModelOpen && (
        <div
          className="absolute z-50 top-0 flex flex-col  items-center justify-center lg:min-w-[1100px] md:max-w-full md:min-w-0 lg:mx-[10%]  md:mx-0 my-5 rounded-xl"
          style={shadowStyle}
        >
          <div className="self-center flex flex-col  py-3 gap-5">
            <button className="self-end px-4" onClick={handleModel}>
              <CloseIcon sx={{ fontSize: "28px" }} />
            </button>
            <div className="flex flex-col px-20 gap-3">
              <h1 className="self-center font-bold text-xl">
                {" "}
                <span className="text-[#0064E1]">Terms</span> and condition
              </h1>
              <div>
                <span className="font-bold"> Scope of Work:</span>
                The Company agrees to provide AI software development and sales
                services as outlined in the project proposal. Any changes to the
                scope of work must be agreed upon in writing by both parties.
              </div>
              <div>
                <span className="font-bold">Payment:</span> Payment terms and
                schedules will be outlined in the project proposal. Invoices are
                due within [number] days of receipt. Failure to make payments
                may result in project delays or termination.
              </div>
              <div>
                <span className="font-bold"> Confidentiality:</span> Both
                parties agree to keep confidential any proprietary or sensitive
                information obtained during the course of the project. This
                includes, but is not limited to, trade secrets, business plans,
                and technical information.
              </div>
              <div>
                <span className="font-bold"> Intellectual Property: </span>
                The Company retains the intellectual property rights to any
                software or solutions developed during the project unless
                otherwise specified in writing. The Client is granted a
                non-exclusive license to use the delivered solutions for their
                internal business purposes.
              </div>
              <div>
                <span> Project Timeline:</span>
                The project timeline will be outlined in the project proposal.
                Delays caused by the Client, unforeseen circumstances, or force
                majeure events may impact the timeline. The parties agree to
                communicate promptly in case of any delays.
              </div>
              <div>
                <span className="font-bold"> Termination:</span> Either party
                may terminate the Agreement with written notice in the event of
                a material breach by the other party. The Client is responsible
                for payment for services rendered up to the termination date.
              </div>
              <div>
                <span className="font-bold">Warranties: </span> The Company
                warrants that its services will be performed in a professional
                manner and in accordance with industry standards. The Client
                must notify the Company of any defects within [number] days of
                delivery for corrections to be made.
              </div>
              <div>
                <span className="font-bold"> Liability:</span> The Company's
                liability is limited to the total value of the project. In no
                event shall either party be liable for any indirect,
                consequential, or incidental damages arising out of or related
                to this Agreement.
              </div>
              <div>
                <span className="font-bold"> Governing Law: </span>This
                Agreement shall be governed by and construed in accordance with
                the laws of [your jurisdiction]. Any disputes arising out of or
                in connection with this Agreement shall be resolved through good
                faith negotiations, and if not resolved, through arbitration in
                accordance with the rules of [Arbitration Association].
              </div>
              <div>
                <span className="font-bold"> Miscellaneous:</span> Any
                amendments to this Agreement must be in writing and signed by
                both parties. This Agreement constitutes the entire
                understanding between the parties and supersedes all prior
                agreements or understandings.
              </div>
            </div>
            <div className="flex flex-row gap-3 px-20">
              <input
                type="checkbox"
                lang="en"
                id="checkBox"
                className=" w-[5%] hover:cursor-pointer focus:cursor-pointer"
                onChange={directUser}
              />
              <label htmlFor="checkBox">I accept terms and condition</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;

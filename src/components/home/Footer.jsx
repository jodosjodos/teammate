import { Input } from "@material-tailwind/react";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className="bg-[#F1511B] flex flex-col gap-5 px-16 py-8">
      <div className="flex lg:flex-row md:flex-row sm:flex-col   lg:items-center md:items-center lg:justify-between md:justify-center sm:items-start  sm:justify-start ">
        <div className="flex-1">
          <div>
            <img src="images/logo.png" alt="" />
          </div>
          <div className="md:w-72 lg:w-72 sm:w-60 ">
            <Input
              color="white"
              label="&#x2709; Enter Your Email"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send fas fa-heart name similar text-white"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              }
              className="bg-[#F27E1E] bg-transparent"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col items-start gap-32 flex-1">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#909ACF]">Navigation</h1>
            <div className="flex flex-col gap-3 text-white">
              <Link>Home</Link>
              <Link>Services</Link>
              <Link>properties</Link>
              <Link>Testimonies</Link>
              <Link>FAQ’s</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[#909ACF]">About us</h1>
            <div className="flex flex-col gap-3 text-white">
              <Link>Our Story</Link>
              <Link>why choose us</Link>
              <Link> Teams</Link>
              <Link>Our Clients</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[#909ACF]">Contact Us</h1>
            <div className="flex flex-col gap-3 text-white">
              <Link>Contact Form</Link>
              <Link>Call us</Link>
              <Link>Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col   lg:justify-between md:justify-between lg:items-center md:items-center sm:items-center  sm:justify-center">
        <p className="text-white">@2023 Teamate. All Rights Reserved.</p>
        <div className="flex flex-row gap-4">
          <div className="bg-[#F27E1E] flex items-center p-1 rounded-xl justify-center ">
            <FacebookIcon sx={{ color: "white" }} />
          </div>
          <div className="bg-[#F27E1E] flex items-center p-1 rounded-xl justify-center">
            <LinkedInIcon sx={{ color: "white" }} />
          </div>
          <div className="bg-[#F27E1E] flex items-center p-1 rounded-xl justify-center">
            <TwitterIcon sx={{ color: "white" }} />
          </div>
          <div className="bg-[#F27E1E] flex items-center p-1 rounded-xl justify-center">
            <YouTubeIcon sx={{ color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

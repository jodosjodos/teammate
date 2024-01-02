import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirecting() {
  const navigate = useNavigate()
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      // Redirect to another page after 4 seconds
      navigate("/");
    }, 3000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center gap-3  sm:py-44 md:py-0 lg:py-0 sm:px-2 md:px-0 lg:px-0">
      <div>
        <img src="images/largeLogo.png" alt=" large logo" className="sm:w-56 md:w-full lg:w-full" />
      </div>
      <p className="lg:text-2xl md:text-xl">We have successfully received your request</p>
      <p className="text-[#F1511B]">Redirecting...</p>
    </div>
  );
}

export default Redirecting;

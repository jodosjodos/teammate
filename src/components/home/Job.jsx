function Job() {
  return (
    <div className="bg-[#F1511B08] flex flex-col justify-center px-5 gap-5">
      <h1 className="text-black font-bold  text-2xl self-center">Job</h1>
      <div className=" bg-white border rounded-xl flex flex-col px-16 py-24">
        <div className="text-[red]">
          <p>
            Our company assign teams to companies for any remote work varying
            from software to sales. Each team have a dedicated team manager who
            contact with the companies . We also hire teams on orders. This
            whole process saves companies important time and effort hiring,{" "}
            bringing them together and managing people. Our company structure
            allows us to work and hire people from anywhere in the world which{" "}
            allows us to bring top- tier services to you.
          </p>
        </div>
        <h1>How to hire team</h1>
        <div>
          <p>
            Schedule a consultation call with our experts. Discuss your
            requirements, ask questions, and get personalized guidance. or Fill
            out our
            detailed form to provide specific details about your needs. Our team
            will review your submission promptly.
          </p>
        </div>
        <div>
          <div>
            <button>Fill Form</button>
            <button>Book call</button>
          </div>
          <div>
            <img src="images/imageJob.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;

import AI from "/images/ai.svg";
import Sales from "/images/sales.svg";

const Services = () => {
  const services = [
    {
      icon: AI,
      title: "Artificial intelligence",
      subtitle:
        "Harness the power of Artificial Intelligence for smart solutions that adapt and learn, paving the way for innovation and efficiency in every aspect.",
    },
    {
      icon: Sales,
      title: "Sales",
      subtitle:
        "Elevate your sales strategy with cutting-edge techniques, turning leads into lasting relationships and optimizing your revenue potential.",
    },
    {
      icon: AI,
      title: "Software development",
      subtitle:
        "Experience the future of seamless operations through our advanced software solutions, designed to simplify complexities and drive business success.",
    },
  ];
  return (
    <div className="px-5">
      <div className="flex flex-col items-center pb-5">
        <p className="text-2xl text-blue-600 font-semibold">Services</p>
        <p className="text-[#393939]">
          The projects we work on can include multiple fields like video editing
          with game development or any other combination
        </p>
      </div>
      <div className="flex gap-y-8 flex-col md:flex-row md:justify-between md:px-20 md:gap-6">
        {services?.map((service, i) => (
          <div
            className="px-12 flex flex-col gap-10 shadow-2xl py-20 rounded-xl"
            key={i}
          >
            <div className="flex items-center gap-1">
              <img src={service.icon} alt={service.title} />
              <p className="font-bold ">{service.title}</p>
            </div>

            <div>
              <p className="text-sm text-[#393939]">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

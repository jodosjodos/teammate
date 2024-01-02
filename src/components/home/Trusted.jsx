import Carousel from "./Carousel";

function Trusted() {
  return (
    <div className="flex flex-col gap-5">
      <div className="self-center flex flex-col justify-center items-center">
        <h1 className="text-[#0064E1] font-bold text-xl ">Trusted By</h1>
        <p>Trusted by a hundreds of companies</p>
      </div>
      <Carousel />
    </div>
  );
}

export default Trusted;

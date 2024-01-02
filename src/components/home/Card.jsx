const Card = ({ testimony }) => {
  const boxShadowStyle = {
    boxShadow:
      "0px 8.309572219848633px 34.27698516845703px 0px rgba(0, 0, 0, 0.24)",
  };

  return (
    <div
    key={testimony.id}
      className="relative flex w-full max-w-[26rem] flex-col  bg-transparent bg-clip-border text-gray-700 shadow-none  rounded-2xl px-12 py-3"
      style={boxShadowStyle}
    >
      <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <img
          src={testimony.image}
          alt="Tania Andrew"
          className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {testimony.name}
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
            {testimony.position}
          </p>
        </div>
      </div>
      <div className="p-0 mb-6">
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {testimony.testimony}
        </p>
      </div>
    </div>
  );
};

export default Card;

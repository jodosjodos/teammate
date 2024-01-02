import Card from "./Card";

function Testimonies() {
  const testimonies = [
    {
      id: 1,
      image: "images/testimony1.png",
      name: "Marilyn Schleifer",
      position: "Ceo at Google",
      testimony:
        "Working with this AI software development and sales team has been a game-changer for our business. Their innovative solutions have significantly boosted our efficiency and sales",
    },
    {
      id: 2,
      image: "images/testimony2.png",
      name: "Gretchen Kenter",
      position: "Ceo at Microsoft",
      testimony:
        "Our collaboration with this AI software development and sales team has been a journey of innovation and growth. Their solutions have given us a competitive edge, leading to increased sales",
    },
    {
      id: 3,
      image: "images/testimony3.png",
      name: "Skylar Korsgaard",
      position: "Ceo at Meta",
      testimony:
        "Choosing this team for our AI software needs was a wise decision. Their seamless integration of cutting-edge technology and effective sales strategies has transformed our business",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="self-center flex flex-col justify-center items-center">
        <h1 className="text-[#F1511B] font-bold text-xl ">Testimonials</h1>
        <p>What our client says</p>
      </div>
      <div className="flex lg:flex-row md:flex-col sm:flex-col  lg:px-0 md:px-2 sm:px-2   gap-16 lg:items-center md:items-start sm:items-start  justify-around">
        {testimonies.map((testimony) => (
          <Card testimony={testimony}  key={testimony.id}/>
        ))}
      </div>
    </div>
  );
}

export default Testimonies;

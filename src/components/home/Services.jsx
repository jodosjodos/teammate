import AI from '../../../public/images/ai.svg';
import Sales  from '../../../public/images/sales.svg';


const Services = () => {
    const services = [
        { icon: AI, title: "Artificial intelligence", subtitle: "Harness the power of Artificial Intelligence for smart solutions that adapt and learn, paving the way for innovation and efficiency in every aspect." },
        { icon: Sales, title: "Sales", subtitle: "Elevate your sales strategy with cutting-edge techniques, turning leads into lasting relationships and optimizing your revenue potential." },
        { icon: AI, title: "Software development", subtitle: "Experience the future of seamless operations through our advanced software solutions, designed to simplify complexities and drive business success." }
    ]
    return (
        <div>
            <div className='flex flex-col items-center pb-5'>
                <p className='text-2xl text-orange-600 font-semibold'>Services</p>
                <p>The projects we work on  can include multiple fields like video editing with game development or any other combination</p>
            </div>
            <div className='flex justify-between px-28 gap-6'>
                {
                    services?.map((service, i) => (
                        <div className='px-8 flex flex-col gap-10 shadow-2xl py-10 rounded-xl' key={i}>
                            <div className='flex items-center gap-1'>
                                <img src={service.icon} alt={service.title} />
                                <p className='font-bold'>{ service.title }</p>
                            </div>

                            <div>
                                <p>{service.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
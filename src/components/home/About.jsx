
import React from 'react'

const About = () => {
    return (
        <div className='w-[90%] md:w-full flex flex-col mt-20 md:mt-0 p-5 md:px-10'>
            <div className='flex flex-col items-center pb-5'>
                <p className='text-2xl text-blue-600 font-semibold'>About</p>
                <p className='text-sm'>What make us special to be choosen by our clients</p>
            </div>
            <div className='py-5'>
                <div className='float-left w-96'>
                    <img src="images/about-1.png" alt="about-1" />
                </div>

                <div className='float-right md:w-[700px] flex flex-col md:flex-none'>
                    <div className='w-full pt-8 ml-5 md:pt-0'>
                        <p className='text-sm'>
                        We Assign Teams To Companies For All Remote Jobs And Projects, Covering Everything From Software Engineering To Sales. Each Team Comes With A Team Manager Who Is Responsible For All Communication, He Is Like A Superhuman Because He Is A Employee Who Can Do The Work Of Hundreds. We Have Collaborated With Numerous Companies To Become Experts In Delivering Top- Tier Services For Remote Projects And Jobs. This Not Only Saves You Money But Also Precious Time And Effort In Hiring, Managing And Communication With Numerous People.
                        </p>
                    </div>
                    <div className='pt-10 flex justify-between md:px-10'>
                        <div className='flex flex-col items-center'>
                            <img src="images/companies.svg" alt="companies-svg" className='w-10 gap-y-1' />
                            <p className='font-bold text-xl text-blue-600'>50+</p>
                            <p className=''>Companies</p>
                        </div>
                        <div className='flex flex-col items-center text-sm'>
                            <img src="images/teams.svg" alt="teams-svg" className='w-10 gap-y-1' />
                            <p className='font-bold text-xl text-blue-600'>100+</p>
                            <p>Teams</p>
                        </div>
                        <div className='flex flex-col items-center gap-y-1'>
                            <img src="images/completed.svg" alt="completed-svg" className='w-9' />
                            <p className='font-bold text-xl text-blue-600'>1000+</p>
                            <p>Completed project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

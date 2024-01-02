import React from 'react'

const About = () => {
    return (
        <div className='px-10'>
            <div className='flex flex-col items-center pb-5'>
                <p className='text-2xl text-orange-600 font-semibold'>About</p>
                <p>What make us special to be choosen by our clients</p>
            </div>
            <div className='py-5'>
                <div className='float-left w-96'>
                    <img src="images/about-1.png" alt="about-1" />
                </div>

                <div className='float-right w-[700px]'>
                    <div>
                        <p>
                        We Assign Teams To Companies For All Remote Jobs And Projects, Covering Everything From Software Engineering To Sales. Each Team Comes With A Team Manager Who Is Responsible For All Communication, He Is Like A Superhuman Because He Is A Employee Who Can Do The Work Of Hundreds. We Have Collaborated With Numerous Companies To Become Experts In Delivering Top- Tier Services For Remote Projects And Jobs. This Not Only Saves You Money But Also Precious Time And Effort In Hiring, Managing And Communication With Numerous People.
                        </p>
                    </div>
                    <div className='pt-10 flex justify-between px-5'>
                        <div className='flex flex-col items-center'>
                            <img src="images/companies.svg" alt="companies-svg" />
                            <p className='font-bold text-xl text-orange-600'>50+</p>
                            <p className=''>Companies</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src="images/teams.svg" alt="teams-svg" />
                            <p className='font-bold text-xl text-orange-600'>100+</p>
                            <p>Teams</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src="images/completed.svg" alt="completed-svg" />
                            <p className='font-bold text-xl text-orange-600'>1000+</p>
                            <p>Completed project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
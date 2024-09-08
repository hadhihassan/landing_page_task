import v from '../../assets/Vector5.svg'
import v1 from '../../assets/Vector6.svg'
import v2 from '../../assets/Group381.png'
export default function Heading() {
    return (
        <div className="bg-[#090913] sm:px-28 px-8 sm:py-10 py-2 w-full h-[740px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-200 from-3% via-[#090913] via-45% to-[#090913]">
            <div className=''>
                <p className='sm:w-[50%] w-full sm:text-6xl text-4xl text- text-green-500 sm:tracking-wider'>Learner Benefits</p>
            </div>

            <div className='grid sm:grid-cols-2'>
                <div className='grid gap-20 mt-16 h-auto sm:grid hidden'>
                    <div className='rounded flex-row text-start font-thin text-green-100 font-sans'>
                        <img src={v1} className='h-60 z-10 absolute' alt="" ></img>
                        <div className='p-5 pt-12 w-[500px]'>
                            <p className='font-sans font-normal text-4xl'>World Class Pedagogy</p>
                            <p className='break-all  mt-5 font-sans font-medium'>Learn from the World’s Best Faculty & Industry Experts.
                                Learn with fun Hands-on Exercises & Assignments.
                                Participate in Hackathons & Group Activities.</p>
                        </div>
                    </div>
                    <div className='rounded flex-row text-start font-thin text-green-100 font-sans'>
                        <img src={v1} className='h-60 z-10 absolute' alt="" ></img>
                        <div className='p-5 pt-12 w-[500px]'>
                            <p className='font-sans font-normal text-4xl'>Career Assistance</p>
                            <p className='break-all  mt-5 font-sans font-medium'>Resume Building & Mock Interview Prep.
                                50+ Institution Options.
                                Interview Prep.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-16 '>
                    <div className='rounded flex-row text-start font-thin text-green-100 font-sans'>
                        <img src={v} className=' z-10 absolute' alt="" ></img>
                        <div className='p-10 pt-16  w-[450px] z-50'>
                            <p className='font-sans font-normal text-4xl'>Gamified Learning</p>
                            <p className='break-all  mt-8 font-sans sm:font-medium font-normal '>Dedicated Learning Managers. <br />
                                24*7 learning Support. <br />
                                Network with Peers & Interact with Industry Leaders. <br /></p>
                        </div>
                        <div className='grid sm:hidden pl-10 z-50  w-[400px]'>
                            <p className='font-sans font-normal text-2xl'>Career Assistance</p>
                            <p className='break-all  mt-5 font-sans font-normal z-50'>Resume Building & Mock Interview Prep.
                                50+ Institution Options.
                                Interview Prep.</p>
                        </div>
                        
                        <div className='relative'>
                            <img src={v2} className='z-50 absolute sm:-bottom-[310px] -bottom-[210px] sm:left-64 left-36 ' alt="" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import img from '../../assets/Group207.png'
import CustomeDivVector from '../../assets/Vector4.png'
import FaiveStart from '../../assets/5start.png'
import ChatIcon from '../../assets/fs.png'
import GameIcon from '../../assets/game.png'
import GrowthIcon from '../../assets/growth.png'

function IntroSection() {
    return (
        <>
            <div className='flex overflow-y-hidden '>
                <div className='h-[670px] sm:col-span-2 overflow-x-auto overflow-x-hidden col-span-1 pt-0 sm:pt-28 overflow-xhidden'>
                    <div className='w-full gap-7 ml-8'>

                        <p
                            className='text-gray-200 m-auto mb-2  cursor-pointer tracking-widest text-xs  sm:text-sm font-sans hover:text-green-300 '>

                            Professional Certification & Degree Programs

                        </p>
                        <p
                            className='font-semibold sm:text-6xl text-4xl mb-8 text-gray-200'>Accelerate your <span className='text-green-500'>Career</span> <br /><span className='text-green-500'>Growth</span> & UpskillYourself
                        </p>

                        <div className='text-gray-400 font-sans text-sm sm:w-[400px] sm:h-14 w-96 h-10 bg-gray-500 flex items-center justify-between pl-6 p-1 rounded-3xl border border-gray-500'>

                            <p className='sm:text-sm text-xs text-center text-gray-300'>Enter your email</p>
                            <button className=' text-black  bg-green-500 sm:py-[13px] sm:px-7 px-5 py-1 rounded-full text-center'>send</button>

                        </div>
                    </div>
                    <div className=' sm:pt-20 pt-56 flex gap-36 col-span-1 sm:col-span-1 animate-infinite-scroll'>
                        <div className='rounded flex-row text-start font-thin   text-green-100 font-sans w-[70px]'>
                            <img src={CustomeDivVector} className='h-48 z-10 absolute' alt="" ></img>
                            <div className='pt-7 pl-5 grid gap-4  text-green-400'>
                                <div className=''>
                                    <img src={FaiveStart}  alt="" />
                                </div>
                                <div>
                                    <p className='text-xl font-semibold'>4.8/5</p>
                                    <p className='text-xl font-semibold'>rating</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded flex-row text-start font-thin   text-green-100 font-sans w-[70px]'>
                            <img src={CustomeDivVector} className='h-48 z-10 absolute' alt="" ></img>
                            <div className='pt-5 pl-5 grid gap-4 text-green-400'>
                                <div>
                                    <img src={GrowthIcon} alt="" />
                                </div>
                                <div>
                                    <p className='text-xl font-semibold'>
                                        1000
                                    </p>
                                    <p className='text-xl font-semibold'>
                                        career
                                    </p>
                                    <p className='text-xl font-semibold'>
                                        transaction
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded flex-row text-start font-thin   text-green-100 font-sans w-[70px]'>
                            <img src={CustomeDivVector} className='h-48 z-10 absolute' alt="" ></img>
                            <div className='pt-5 pl-5 grid gap-4  text-green-400'>
                                <img src={GameIcon} alt="" />
                                <div className='break-words font-semibold text-xl w-[190px]'>
                                    Gamified Learning
                                    24*7 learning Support. 
                                </div>
                            </div>
                        </div>
                        <div className='rounded flex-row text-start font-thin   text-green-100 font-sans w-[70px]'>
                            <img src={CustomeDivVector} className='h-48 z-10 absolute' alt="" ></img>
                            <div className='pt-5 pl-5 grid gap-4  text-green-400'>
                                <img src={ChatIcon} alt="" />
                                <div className='break-words font-semibold text-xl w-[190px] '>
                                    1:1 <br />
                                    with industry  mentors
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-white w-auto  flex justify-end items-end z-40 absolute sm:-right-16 -right-5 sm:-bottom-14 -bottom-14 left-10 ml-10'>
                    <img src={img} className='' alt="" />
                </div>
            </div>
        </>
    )
}

export default IntroSection

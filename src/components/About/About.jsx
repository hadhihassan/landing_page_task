export default function About() {
    return (
        <div className="bg-[#090913] sm:px-10 px-4 sm:py-10 py-5 w-full h-auto">
            <div className="border border-gray-500 rounded-xl w-full h-auto sm:p-10 p-5 sm:px-12 px-5 sm:pt-16 pt-10 grid gap-16">
                <div>
                    {/* Side Heading */}
                    <div className="sm:flex sm:justify-between ">

                        <p
                            className='sm:w-[50%] w-[100]  sm:text-4xl text-xl text-start text-gray-200 tracking-wider'><span className='text-green-500'>About of</span> School Of Science <br /> & Managment
                        </p>
                        <p className="break-words break-all  sm:pt-0 pt-3 text-gray-200 font-sans sm:px-12  sm:w-[50%]">
                            Academy Is a fully accredited institution with its headquarter in Calicut. The institution prides itself for being a vibrant effort from the part of highly experienced entrepreneurs who had successfully proved themselves in a range of academic fields
                        </p>
                    </div>
                    {/* Description */}
                    <div className="flex items-end justify-end pr-12 pt-5 sm:flex hidden">
                    <button
                                className="font-sans flex justify-center text-green-400 gap-2 items-center  shadow-xl text-sm  bg-transparent backdrop-blur-md  isolation-auto border-gray-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border rounded-full group"
                                type="submit"
                            >
                                Read more

                            </button>
                    </div>
                </div>
                {/* Cards */}
                <div className="text-white grid sm:grid-cols-4 grid-cols-1 gap-3 bg-transparent h-auto  w-full ">
                    <div
                        className="grid gap-16 grid-cols-1 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-300 via-[#090913] to-[#090913] bg-transparent h-[350px] border border-gray-500 rounded-3xl  pt-16 pb-2">
                        <div className='grid gap-3 px-10'>
                            <p className='font-sans text-4xl bg-gradient-to-b from-green-900 via-green-300  to-white inline-block text-transparent bg-clip-text'>01</p>
                            <p className='font-sans text-xl bg-gradient-to-b from-green-900 via-green-200 to-white inline-block text-transparent bg-clip-text'>What we offer</p>
                            <p
                                className='font-sans break-all font-normal'
                            >The skill set required for jobs are changing every day.</p>
                        </div>
                        <div className="h-full flex items-end justify-end  pr-6">
                            <button
                                className="font-sans flex justify-center text-green-400 gap-2 items-center  shadow-xl text-sm  bg-transparent backdrop-blur-md  isolation-auto border-gray-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border rounded-full group"
                                type="submit"
                            >
                                Read more

                            </button>
                        </div>
                    </div>
                    <div
                        className="hidden sm:grid gap-16 grid-cols-1 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-300 via-[#090913] to-[#090913] bg-transparent h-[350px] border border-gray-500 rounded-3xl  pt-16 pb-2">
                        <div className='grid gap-3 px-10'>
                            <p className='font-sans text-4xl bg-gradient-to-b from-green-900 via-green-300  to-white inline-block text-transparent bg-clip-text'>02</p>
                            <p className='font-sans text-xl bg-gradient-to-b from-green-900 via-green-200 to-white inline-block text-transparent bg-clip-text'>Overseas <br /> consultancy</p>
                            <p
                                className='font-sans break-all font-normal'
                            >Our Overseas education consultants will be helping you to find the best course or university</p>
                        </div>
                        <div className="h-full flex items-end justify-end  pr-6 -mb-16">
                            <button
                                className="font-sans flex justify-center text-green-400 gap-2 items-center  shadow-xl text-sm  bg-transparent backdrop-blur-md  isolation-auto border-gray-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border rounded-full group"
                                type="submit"
                            >
                                Read more

                            </button>
                        </div>
                    </div>
                    <div
                        className="hidden sm:grid gap-16 grid-cols-1 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-300 via-[#090913] to-[#090913] bg-transparent h-[350px] border border-gray-500 rounded-3xl  pt-16 pb-2">
                        <div className='grid gap-3 px-10'>
                            <p className='font-sans text-4xl bg-gradient-to-b from-green-900 via-green-300  to-white inline-block text-transparent bg-clip-text'>03</p>
                            <p className='font-sans text-xl bg-gradient-to-b from-green-900 via-green-200 to-white inline-block text-transparent bg-clip-text'>Distance education <br /> programs</p>
                            <p
                                className='font-sans break-all font-normal'
                            >We believe education is life-long. Our distance education program for students will help them acquire </p>
                        </div>
                        <div className="h-full flex items-end justify-end -mb-24  pr-6">
                            <button
                                className="font-sans flex justify-center text-green-400 gap-2 items-center  shadow-xl text-sm  bg-transparent backdrop-blur-md  isolation-auto border-gray-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border rounded-full group"
                                type="submit"
                            >
                                Read more

                            </button>
                        </div>
                    </div>
                    <div
                        className="hidden sm:grid gap-16 grid-cols-1 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-300 via-[#090913] to-[#090913] bg-transparent h-[350px] border border-gray-500 rounded-3xl  pt-16 pb-2">
                        <div className='grid gap-3 px-10'>
                            <p className='font-sans text-4xl bg-gradient-to-b from-green-900 via-green-300  to-white inline-block text-transparent bg-clip-text'>04</p>
                            <p className='font-sans text-xl bg-gradient-to-b from-green-900 via-green-200 to-white inline-block text-transparent bg-clip-text'>Add -on courses</p>
                            <p
                                className='font-sans break-all font-normal'
                            >Ad-on courses are an excellent way of getting more out of your degree and career.</p>
                        </div>
                        <div className="h-full flex items-end justify-end  pr-6">
                            <button
                                className="font-sans flex justify-center text-green-400 gap-2 items-center  shadow-xl text-sm  bg-transparent backdrop-blur-md  isolation-auto border-gray-400 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border rounded-full group"
                                type="submit"
                            >
                                Read more

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

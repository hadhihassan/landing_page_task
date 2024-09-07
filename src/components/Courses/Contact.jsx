import Arrow from '../../assets/Arrow1.png'
export default function Contact() {
    return (
        <div className="bg-[#090913] sm:px-28 px-10 sm:py-10 py-0 w-full h-auto">
            <div className="sm:flex flex-row sm:justify-between ">
                <div className="sm:border-r sm:pr-5 pr-0 sm:border-green-700 sm:w-1/3 w-auto">
                    <div>
                        <p
                            className='font-semibold sm:text-6xl text-5xl sm:mb-8 mb-0 text-gray-200'><span className='text-green-500'>Let’s Get </span> In<br /><span className='text-green-500'></span>  Touch
                        </p>
                    </div>
                    <div className="sm:mt-28 mt-5">
                        <ul className="grid sm:gap-12 gap-5">
                            <li>
                                <p className="font-medium text-gray-500 font-sans">Phone</p>
                                <p className="font-sans text-gray-300 sm:text-2xl text-xl">9656300567</p>
                                <p className="font-sans text-gray-300 sm:text-2xl text-xl">9037206760</p>
                            </li>
                            <li >
                                <p className="font-medium text-gray-500 font-sans">Phone</p>
                                <p className="font-sans text-gray-300 sm:text-2xl text-xl">9037206760</p>
                            </li>
                            <li>
                                <p className="font-medium text-gray-500 font-sans">Address</p>
                                <p className="font-sans text-gray-300 sm:text-2xl text-xl">Education,<br />2nd Floor, Cental Arcade. <br /> Cherooty Road, <br />Calicut - 673032</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/3 pl-28 pt-10 border-r border-green-700 hidden sm:grid'>
                    <img src={Arrow} alt="" />
                </div>
                <div className='w-1/3'>
                    <p className="font-sans text-gray-300 text-xl pl-10 hidden sm:flex">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <div className="container sm:px-5 px-0 sm:w-[500px] w-[400px] sm:absolute sm:right-24 right-0 sm:mt-10 mt-5 ">
                        <div >
                            <div className="max-w-md mx-auto sm:px-8 px-4 sm:py-6 py-3 bg-gray-100 rounded-lg shadow-lg  shadow-green-400">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                                <form>
                                    <div className="mb-4">
                                        <input
                                            className="w-full px-4 py-2 bg-gray-100 border-b-2 rounded-lg focus:outline-none  transition duration-300"
                                            placeholder="First Name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            className="w-full px-4 py-2 bg-gray-100 border-b-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                            placeholder="Last Name"
                                            name="email"
                                            id="email"
                                            type="email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            className="w-full px-4 py-2 bg-gray-100 border-b-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                            placeholder="Email"
                                            name="message"
                                            id="message"
                                        ></input>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            className="w-full px-4 py-2 bg-gray-100 border-b-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                            placeholder="Phone"
                                            name="message"
                                            id="message"
                                        ></input>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            className="w-full px-4 py-2 bg-gray-100 border-b-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                            placeholder="Courses"
                                            name="message"
                                            id="message"
                                        ></input>
                                    </div>
                                    <button
                                        className="w-full bg-green-400 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                                        type=""
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

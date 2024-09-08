import insta from '../../assets/insta.png'
import face from '../../assets/face.png'
import icon from '../../assets/51.png'
export default function Footer() {
    return (
        <div className="bg-[#090913] sm:px-14 px-10  sm:py-10 py-10 w-full h-auto">
            <div className="border rounded-3xl">
                <div className="sm:p-10 p-8 sm:pl-16 pl5">
                    <ul className="grid sm:grid-cols-5 grid-cols-1 ">
                        <li className="sm:col-span-2 col-span-1 sm:pb-16 pb-4 sm:pt-28  grid sm:gap-20">
                            <div className="text-sm text-gray-400 font-sans">
                                <p>9656300567</p>
                                <p>9656300567</p>
                                <p className="mt-4">Admissions@co.in</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-sans">
                                    2nd Floor, Cental Arcade. <br /> Cherooty Road,<br /> Calicut - 673032
                                </p>
                            </div>
                        </li>
                        <li className="sm:col-span-1 col-span-1 sm:pb-16 pb-3 sm:pt-20 pt-2 grid gap-24">
                            <ul className="grid gap-2 text-gray-400 font-sans font-normal">
                                <li className="text-xl text-green-300">Explore</li>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Courses</li>
                                <li>Gallery</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </li>
                        <li className="sm:col-span-1 col-span-1 sm:pb-16 sm:pt-20 pt-3 grid gap-24">
                            <ul className="grid gap-2 text-gray-400 font-sans font-normal">
                                <li className="text-xl text-green-300">Courses</li>
                                <li>Full Stack Developer and Certification <br /> courses</li>
                                <li>Bachelor of Commerce (Bcom)</li>
                                <li>BBA Computer Application</li>
                                <li>Bsc computer science -AI and Data <br /> Science </li>
                                <li>BBA Aviation Management</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="text-white flex items-end sm:justify-end justify-start sm:ml-0  ml-8  w-[85%] pb-7">
                    <ul className="flex gap-10">
                        <li><img src={face} alt="" /></li>
                        <li><img src={insta} alt="" /></li>
                        <li><img src={icon} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

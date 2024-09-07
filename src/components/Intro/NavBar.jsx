import { useCallback, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function NavBar() {

    const [nav, setNav] = useState(false);
    const handleNav = useCallback(() => {
        setNav(prevNav => !prevNav);
    }, []);

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About Us' },
        { id: 3, text: 'Courses' },
        { id: 4, text: 'Gallery' },
    ];

    return (
        <>
            <div className='  py-8 flex justify-between items-center h-10 w-full sm:border-b sm:border-gray-400 sm:px-16 text-white mt-8'>
                <div className=' w-full flex justify-end gap-72'>
                    <ul className='hidden md:flex  ml-1 text-[13px] font-semibold  md:justify-center md:items-center w-[30%]'>
                        <span className='h-4'></span>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className='m-auto cursor-pointer font-normal text-lg font-sans hover:text-green-300 text-gray-100'
                            >
                                {item.text}
                            </li>
                        ))}
                    </ul>
                    <div className='hidden md:flex'>
                        <button className='py-1 px-3 border bg-transparent rounded-full text-sm'>Contact</button>
                    </div>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            <ul
                className={
                    nav
                        ? 'md:hidden ease-in-out duration-500 grid grid-cols-4'
                        : 'ease-in-out   duration-500 fixed top-0 bottom-0 left-[-100%] '
                }
            > 

                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='cursor-pointer font-sans p-5 text-white'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavBar

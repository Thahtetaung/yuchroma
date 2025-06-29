import '../styles/Navbar.css';
import Logo from '../assets/images/logo_icon.png';
import {useState} from 'react';
import {FaPlus , FaMinus} from 'react-icons/fa';
import { GoSun , GoMoon } from "react-icons/go";
import {Link } from 'react-router-dom';



export default function Navbar(){
    const [isOpen , setIsOpen] = useState(false);
    return (
        <>
            <nav>
                <div>
                    <div id='navbar_leftcontainer'>
                        <a href="/" className="text-2xl font-bold text-gray-800"><img src={Logo} alt="Logo " className='w-12 h-10'/></a>
                    </div>
                    <div id='navbar_rightcontainer'>
                        <ul className="flex space-x-4">
                            <li><Link to='/' className='navbar_rightitems'>Home</Link></li>
                            <li><Link to='/portfolio' className='navbar_rightitems'>Portfolio</Link></li>
                            <li><Link to='/aboutme' className='navbar_rightitems'>About me</Link></li>
                            <li><Link to='/hireme' className='navbar_rightitems'>Hire me</Link></li>
                        </ul>
                        <div className='md:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <FaMinus className='text-xl text-gray-800'/> : <FaPlus className='text-xl text-gray-800'/>}
                            </button>
                        </div>
                    </div> 
                </div>
                {isOpen && (
                <div>
                    <ul className="flex mx-auto flex-col items-center justify-center space-y-4 py-2" id='navbar_mobile'>
                        <li><Link to='/' className=''>Home</Link></li>
                        <li><Link to='/portfolio' className=''>Portfolio</Link></li>
                        <li><Link to='/aboutme' className=''>About me</Link></li>
                        <li><Link to='/hireme' className=''>Hire me</Link></li>
                    </ul>
                </div>
                )}
            </nav>
        </>
    )
}
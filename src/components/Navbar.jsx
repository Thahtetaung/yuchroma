import '../styles/Navbar.css';
import Logo from '../assets/images/logo_icon.png';
import {useState} from 'react';
import {FaPlus , FaMinus , FaChevronDown} from 'react-icons/fa';
import { GoSun , GoMoon } from "react-icons/go";
import {Link } from 'react-router-dom';



export default function Navbar(){
    const [isOpen , setIsOpen] = useState(false);
    const [isDropdownOpen , setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen , setIsMobileDropdownOpen] = useState(false);

    const closeMobileMenu =() => { setIsOpen(false)}
    const closeDropdown = () => {setIsDropdownOpen(false)}

    return (    
        <>
            <nav>
                <div>
                    <div id='navbar_leftcontainer'>
                        <Link to="/" className="text-2xl font-bold text-gray-800"><img src={Logo} alt="Logo " className='w-12 h-10'/></Link>
                    </div>
                    <div id='navbar_rightcontainer'>
                        <ul className="flex space-x-4">
                            <li><Link to='/' className='navbar_rightitems'>Home</Link></li>
                             <li
                            className="dropdown_container"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                            <span className="navbar_rightitems gap-1">Portfolio <span> <FaChevronDown className='text-base pt-1'/> </span></span>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 space-y-2 p-2">
                                <li><Link to="/portfolio/wedding" className="dropdown_items" onClick={closeDropdown}>Wedding</Link></li>
                                <li><Link to="/portfolio/street" className="dropdown_items" onClick={closeDropdown}>Street</Link></li>
                                <li><Link to="/portfolio/food" className="dropdown_items" onClick={closeDropdown}>Food</Link></li>
                                <li><Link to="/portfolio/portraits" className= "dropdown_items" onClick={closeDropdown}> Portraits</Link></li>
                                </ul>
                            )}
                            </li>
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
            {/* Mobile Navigation */}
                {isOpen && (
                <div>
                    <ul id='navbar_mobile'>
                        <li><Link to='/' onClick={ closeMobileMenu}>Home</Link></li>
                        <li
                            className="dropdown_container"
                            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                            >
                            <span className="dropdown_container">Portfolio <span> <FaChevronDown className='text-base pt-1'/> </span></span>
                            {isMobileDropdownOpen && (
                                <ul id='dropdown_mobile_container'>
                                <li><Link to="/portfolio/wedding" className="dropdown_items" onClick={closeMobileMenu}>Wedding</Link></li>
                                <li><Link to="/portfolio/street" className="dropdown_items" onClick={closeMobileMenu}>Street</Link></li>
                                <li><Link to="/portfolio/food" className="dropdown_items" onClick={closeMobileMenu}>Food</Link></li>
                                <li><Link to="/portfolio/portraits" className="dropdown_items" onClick={closeMobileMenu}>Portraits</Link></li>
                                </ul>
                            )}
                            </li>
                        <li><Link to='/aboutme' onClick={ closeMobileMenu}>About me</Link></li>
                        <li><Link to='/hireme' onClick={ closeMobileMenu}>Hire me</Link></li>
                    </ul>
                </div>
                )}
            </nav>
        </>
    )
}
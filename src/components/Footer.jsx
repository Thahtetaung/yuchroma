
import FooterbgImg from '../assets/images/footer_background.jpg';
import FooterLogoImg from '../assets/images/logo_footer.png';
import {FaFacebook , FaInstagram , FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Footer(){
    return (
        <>
            <footer className='relative text-white'>
                <div class="absolute inset-0 w-full ">
                    <img src={FooterbgImg} alt="Footer Background" class="object-center object-cover w-full h-full" />
                </div>
            <div class="flex items-center justify-between flex-col md:flex-row space-y-4 py-6 relative container mx-auto">
                <div class="flex flex-col space-y-1 items-center justify-center md:items-start">
                        <a href="#"><img src={FooterLogoImg} alt="Logo" /></a>
                        <h2>Colorful memories, framed stories</h2>
                    <div>
                        <button class="hero_btn"><a href="#">Work with me</a></button>
                    </div>
                </div>
                <div class="flex flex-row md:gap-10 gap-6 px-6">
                    <div class="flex flex-col space-y-1">
                        <h2 class="text-3xl font-bold">Let's Connect</h2>
                        <a href="#" class="text-lg font-custom flex gap-2 items-center"><FaFacebook />Facebook</a>
                        <a href="#" class="text-lg font-custom flex gap-2 items-center"><FaInstagram />Instagram</a>
                        <a href="#" class="text-lg font-custom flex gap-2 items-center"><FaLinkedin />Linkedin</a>
                    </div>  
                    <div class="flex flex-col space-y-1">
                        <h2 class="text-3xl font-bold">Pages</h2>
                            <Link to='/' className='text-lg font-custom'>Home</Link>
                            <Link to='/portfolio' className='text-lg font-custom'>Portfolio</Link>
                            <Link to='/aboutme' className='text-lg font-custom'>About me</Link>
                            <Link to='/hireme' className='text-lg font-custom'>Hire me</Link>
                    </div>    
                </div> 
                <div class="text-center text-sm py-2">
                    <p>Website provided by <a href="#" class="hover:underline font-bold">20-something</a> All rights served.</p>
                </div>
            </div>
        
        
            </footer>
        </>
    )
}
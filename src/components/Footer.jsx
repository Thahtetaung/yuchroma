
import FooterbgImg from '../assets/images/ui/footer_background.jpg';
import FooterLogoImg from '../assets/images/ui/logo_footer.png';
import {FaFacebook , FaInstagram , FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';


export default function Footer(){
    return (
        <>
            <footer className='relative text-white'>
                <div id='footer_bg'>
                    <img src={FooterbgImg} alt="Footer Background" id='footer_bg_img'/>
                </div>
            <div id='footer_tabs_container'>
                <div id='footer_logo_container'>
                    <Link to='/'><img src={FooterLogoImg} alt="Logo" /></Link>
                        <h2>Colorful memories, framed stories</h2>
                    <div>
                        <Link to='/hireme'><button className="hero_btn" aria-label='work with me'>Work with me</button></Link>
                        
                    </div>
                </div>
                <div id='footer_links_container'>
                    <div id='footer_socials_container'>
                        <h2 id='footer_social_header'>Let's Connect</h2>
                        <a href="https://facebook.com" className='footer_socials'><FaFacebook target='_blank'/>Facebook</a>
                        <a href="https://instagram.com" className='footer_socials'><FaInstagram target='_blank'/>Instagram</a>
                        <a href="https://linkedin.com" className='footer_socials'><FaLinkedin target='_blank'/>Linkedin</a>
                    </div>  
                    <div id='footer_pages_container'>
                        <h2  id='footer_pages_header'>Pages</h2>
                            <Link to='/' className='footer_pages' >Home</Link>
                            <Link to='/portfolio/wedding' className='footer_pages'>Portfolio</Link>
                            <Link to='/aboutme' className='footer_pages'>About me</Link>
                            <Link to='/hireme' className='footer_pages'>Hire me</Link>
                    </div>    
                </div>
            </div> 
                <div id='footer_copyright'>
                    <p>Website provided by <a href="https://20-sth.com" className="hover:underline font-bold" target='_blank'>20-something</a> All rights served.</p>
                </div>
            
        
        
            </footer>
        </>
    )
}
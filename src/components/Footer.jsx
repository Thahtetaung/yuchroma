
import FooterbgImg from '../assets/images/footer_background.jpg';
import FooterLogoImg from '../assets/images/logo_footer.png';
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
                        <a href="#"><img src={FooterLogoImg} alt="Logo" /></a>
                        <h2>Colorful memories, framed stories</h2>
                    <div>
                        <button className="hero_btn"><a href="#">Work with me</a></button>
                    </div>
                </div>
                <div id='footer_links_container'>
                    <div id='footer_socials_container'>
                        <h2 id='footer_social_header'>Let's Connect</h2>
                        <a href="#" className='footer_socials'><FaFacebook />Facebook</a>
                        <a href="#" className='footer_socials'><FaInstagram />Instagram</a>
                        <a href="#" className='footer_socials'><FaLinkedin />Linkedin</a>
                    </div>  
                    <div id='footer_pages_container'>
                        <h2  id='footer_pages_header'>Pages</h2>
                            <Link to='/' className='footer_pages' >Home</Link>
                            <Link to='/portfolio' className='footer_pages'>Portfolio</Link>
                            <Link to='/aboutme' className='footer_pages'>About me</Link>
                            <Link to='/hireme' className='footer_pages'>Hire me</Link>
                    </div>    
                </div>
            </div> 
                <div id='footer_copyright'>
                    <p>Website provided by <a href="#" className="hover:underline font-bold">20-something</a> All rights served.</p>
                </div>
            
        
        
            </footer>
        </>
    )
}
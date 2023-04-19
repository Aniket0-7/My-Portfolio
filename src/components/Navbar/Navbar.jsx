import { Link } from "react-router-dom"
import "./Navbar.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import '../Menu/Menu.css';
const Navbar = () => {

    const [show, setshow] = useState(false);

    return (
        <nav className="n">

            <div className="socialmedia" >

                <ul className="social-media-desktop" >
                    <li>
                        <a href=" https://www.instagram.com/aniketsingh_0/  " target="_blank" > <InstagramIcon /></a>
                    </li>
                    <li>
                        <a href=" https://github.com/Aniket0-7  " target="_blank" > <GitHubIcon /> </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aniket-singh-9225a7230/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bsu2AJB9%2BS2esEBMZ2gPtvw%3D%3D " target="_blank" > <LinkedInIcon /> </a>
                    </li>
                </ul>

            </div>
            <div className='nav-items'  >
                <ul >
                    <li className="" > <a href="#intro" >Home </a></li>
                </ul>
                <ul >
                    <li> <a href="#about" className="">About</a></li>
                </ul>
                <ul >
                    <li>  <a href="#projects" className="">Projects</a></li>
                </ul>
                <ul >
                    <li>  <a href="#contact" className="">Contact</a></li>
                </ul>
            </div>
            <span className={show ? 'menu1' : 'menu'} onClick={() => {
                setshow(!show)
            }} >
                <MenuIcon /></span>
                <span className={show ? 'close1' : 'close'} onClick={() => {
                setshow(!show)
            }}  >
                    <CloseIcon /></span>
            

            <div className={show ? 'Menu' : 'Menu1'} >
                <ul onClick={() => {
                    setshow(!show)
                }} >
                    <li>
                        <a href='#intro' >HOME</a>
                    </li>
                    <li>
                        <a href='#about' >ABOUT</a>
                    </li>
                    <li>
                        <a href='#projects' >PROJECTS</a>
                    </li>
                    <li>
                        <a href='#contact' >CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>


    )
}


export default Navbar;
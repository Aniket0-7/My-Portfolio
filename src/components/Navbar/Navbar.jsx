import { Link } from "react-router-dom"
import "./Navbar.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const[show , setshow] = useState(false);
    const[showicon , setshowicon] = useState(false);
 
    return (
        <nav className="n">
            <div className= {show ? "n-items1":"n-items" }  >
                <ul >
                    <li className="link1" > <a href="#intro" >Home </a></li>

                    <li> <a href="#about" className="link2">About</a></li>

                    <li>  <a href="#contact" className="link3">Contact</a></li>

                </ul>
                <ul>

                </ul>
            </div>
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
                <div className="hamburger-menu" >
                       <a href="#" onClick={() => {setshow(true)}} > 
                       <span className={showicon? "open1":"open" }  onClick={() => {
                        setshowicon(!show)
                       }} ><MenuIcon /></span>
                        </a>
                    </div>
                    <div className={showicon? "crossicon":"crossicon1"} onClick={() => {
                        setshowicon(!show)
                       }} >
                    <span className={showicon? "close1":"close" } onClick={() => { setshow(false)
                        setshowicon(!show)
                       }} ><CloseIcon /></span>
                       </div>
            </div>
        </nav>
    ) 
}


export default Navbar;
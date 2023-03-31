import "./About.css";
import about from "../../img/about.jpg";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import ps from "../../img/ps.png";
import cpp from "../../img/cpp.png";


const About = () =>{
    return(
        <div className="a" id="about">
        <div className="a-left">
             <div className="a-card bg"></div> 
            <div className="a-card">
                <img src={about} alt="" className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              I am a hard-working and driven individual who isn't afraid to face a challenge.
            </p>
            <p className="a-desc">
            I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.
            </p>
            <h2 className="a-title-sklls">Skills</h2>
            <div className="a-skills">
            <a href="https://en.wikipedia.org/wiki/HTML#:~:text=The%20HyperText%20Markup%20Language%20or,scripting%20languages%20such%20as%20JavaScript." target="_blank"  >
            <img src={html} alt="" className="a-html-img" />
            </a>
            <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" >
            <img src={css} alt="" className="a-css-img" />
            </a>
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" >
            <img src={js} alt="" className="a-js-img" />
            </a>
            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" >
            <img src={react} alt="" className="a-react-img" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Adobe_Photoshop" target="_blank" >
            <img src={ps} alt="" className="a-ps-img" />
            </a>
            <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" >
            <img src={cpp} alt="" className="a-cpp-img" />
            </a>
            </div>
        </div>
        </div>
    )
}

export default About;
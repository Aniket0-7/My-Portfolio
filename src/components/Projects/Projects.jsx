import "./Projects.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import { PersonAddAlt1 } from "@mui/icons-material";
import P1 from "../../img/P1.png";
import P2 from "../../img/P2.png";
import P3 from "../../img/P3.png";

function App() {
  var cards = [
    { 
      key: uuidv4(),
      content: (
        <Card
        imagen={P1}
        desc="A simple Netflix Top Series collection page built using react, by clicking on the series , it will redirect you to the series."
        title="NETFLIX"
        link='https://aniket0-7.github.io/Project1.github.io/'
        link2='https://github.com/Aniket0-7/Project1.github.io'
         />),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={P2}
        desc="it is a to do list built using react,it is fully responsive and you can add task and delete the task simply. "
        title="TO DO LIST"
        link='https://aniket-project2.netlify.app'
        link2='https://github.com/Aniket0-7/project2.github.io'
         />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={P3} 
          desc="A fully functional Youtube Clone built using react , materialUI , rapidAPI,it is fully responsive and has many features. "
        title="YOUTUBE CLONE"
        link='http://youtube-aniket.netlify.app'
        link2='https://github.com/Aniket0-7/YT-Clone'
        />
      )
    }
  ];
  return (
    <>
    <div className="heading" id="projects" ><h1>Projects</h1></div>
    <div className="p">
    
      <Carousel 
        cards={cards}
        height="600px"
        width="43%"
        offset={1}
        showArrows={false}
        
      />
    </div>
    </>
  );
}

export default App;

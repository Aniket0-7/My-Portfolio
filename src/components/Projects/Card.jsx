import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";




function Card({ imagen , desc ,title ,link , link2}) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>
        {desc}
      </p>
      <div className={Styles.btnn}> 
        <a href={link} target='_blank' ><Button text="Visit" /></a>
        <a href={link2} target='_blank' > <Button text="Code" /></a>
      </div>
    </animated.div>
  );
}

export default Card;

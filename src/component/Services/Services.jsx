import { motion } from "framer-motion";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Glasses from "../../img/glasses.png";
import HeartEmozi from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./CV01Page_0801CS211034_BT_CS_Deepak_Agrawal.pdf";
import "./Services.css";
const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          I am a competitive programmer with a strong interest in web development.
          <br />
          and machine learning. My skills span across these areas, and I enjoy exploring
          <br />
           new techniques and technologies within each field and currently learning a
           <br/>
           cloud computing from NPTEL By Prof. Soumya Kanti Ghosh (IIT Kharagpur) 
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emozi={HeartEmozi}
            heading={"Frontend Development"}
            detail={"HTML, CSS, Java-Script"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "12rem", left: "-10rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emozi={Glasses}
            heading={"Backend Development"}
            detail={`Node JS, Spring, Java`}
          />
        </motion.div>
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: "12rem", top: "18rem" }}
        >
          <Card emozi={Humble} heading={"Database Management"} detail={`MySQL`} />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

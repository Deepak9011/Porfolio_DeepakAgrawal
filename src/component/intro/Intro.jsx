import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import abhishek from "../../img/abhi.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import glassesimoji from "../../img/glassesimoji.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import Thump from "../../img/thumbup.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Flotingdiv from "../flotingdiv/Flotingdiv";
import "./Intro.css";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "yellow" : "" }}>Hy! I Am</span>
          <span>Deepak Agrawal</span>
          <span>
            A Competitive Programmer with interest in Web Development,Machine Learning and Cloud Computing.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a
            href="https://github.com/Deepak9011"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepakagrawal90/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/deepakagrawal09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector" />
        <img src={Vector2} alt="Vector2" />
        <img src={abhishek} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassboy"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="flotingdiv"
          style={{ top: "-24%", left: "78%" }}
        >
          <Flotingdiv image={crown} text1="Competitive" text2="Programmer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "-5rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="flotingdiv"
          style={{ top: "18rem", left: "-2rem" }}
        >
          <Flotingdiv image={Thump} text1="Computer Science Engineering" text2="" />
        </motion.div>
        <div className="blur" style={{ background: "rbg(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5f5",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span  style={{color: darkMode?'white':''}}>Anos </span>
        <span>Experiência</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>15+</div>
        <span  style={{color: darkMode?'white':''}}>Completos </span>
        <span>Projetos</span>
      </div>
    </div>
  );
};

export default Experience;

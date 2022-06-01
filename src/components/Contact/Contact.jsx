import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Olá!</span>
          <span>Contate-me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form}>
          <div>
                <div class="topic">Tem algum projeto em mente?<br /><br /></div>
                    <p>E-mail: lusa.2001@hotmail.com <br /><br />
                    WhatsApp: (21) 99390-9371  </p>
                
          </div>      
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      <a href="https://drive.google.com/file/d/1ZtTGTs_izmmbi-3h76ZonriQ_2ClfQlP/view" download>
          <button className="button s-button">Download CV</button>
        </a>
    </div>
  );
};

export default Contact;

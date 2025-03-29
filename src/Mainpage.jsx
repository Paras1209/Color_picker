import { useState } from "react";
import "./Mainpage.css";
import { SketchPicker } from "react-color";

export default function Mainpage() {
  const [currentcolor, setCurrentColor] = useState("#761818");
  const handleonchange = (color) => {
    setCurrentColor(color.hex);
  };

  let appstyle = {
    background: currentcolor,
    textalign: "center",
    color: "beige",
    textAlign: "center",
    fontFamily:"Monospace",
    fontSize:"30px",
  };

  const h1style={
    marginBottom:"50px",
    
  }
  
  return (
    <div className="main" style={appstyle}>
      <h1 style={h1style}>Color Picker</h1>

      <section className="sketch">
        <SketchPicker color={currentcolor} onChangeComplete={handleonchange} />
      </section>
      <h3>Your current color code is : {currentcolor}</h3>
    </div>
  );
}

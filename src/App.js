import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState("https://via.placeholder.com/300");
  const [imgHeight, setImgHeight] = useState(300);
  const [imgWidth, setImgWidth] = useState(300);

  function chosenImg(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
    setTimeout(() => {
      setImgHeight(document.getElementById("theImg").height);
      setImgWidth(document.getElementById("theImg").width);
    }, 500);
  }

  return (
    <>
      <h1>hello</h1>

      <div>
        <input
          onChange={(e) => chosenImg(e)}
          type="file"
          accept=".png, .jpeg"
        />
      </div>

      <p>Dit redigerede billede</p>

      <div className="canvas">
        <div className="grid">
          <div className="verticalLine" style={{ width: imgWidth }}>
            <div className="v1" style={{ height: imgHeight }}></div>
            <div className="v2" style={{ height: imgHeight }}></div>
            <div className="v3" style={{ height: imgHeight }}></div>
            <div className="v4" style={{ height: imgHeight }}></div>
            <div className="v5" style={{ height: imgHeight }}></div>
            <div className="v6" style={{ height: imgHeight }}></div>
          </div>

          <div className="horizontalLines" style={{ imgHeight }}>
            <div className="h1" style={{ width: imgWidth }}></div>
            <div className="h2" style={{ width: imgWidth }}></div>
            <div className="h3" style={{ width: imgWidth }}></div>
            <div className="h4" style={{ width: imgWidth }}></div>
            <div className="h5" style={{ width: imgWidth }}></div>
            <div className="h6" style={{ width: imgWidth }}></div>
          </div>
        </div>

        <div className="img">
          <img
            style={{ width: "300px", filter: "grayscale(100%)" }}
            src={img}
            alt="pic"
            id="theImg"
          />
        </div>
      </div>
    </>
  );
}

export default App;

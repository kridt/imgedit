import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState("https://via.placeholder.com/300");
  const [imgHeight, setImgHeight] = useState(300);

  function chosenImg(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
    setTimeout(() => {
      setImgHeight(document.getElementById("theImg").height);
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
          <div
            className="gridElements noneBorder"
            style={{ height: imgHeight / 3 }}
          ></div>
          <div
            className="gridElements"
            style={{
              height: imgHeight / 3,
              borderBottom: "none",
              borderTop: "none",
            }}
          ></div>
          <div
            className="gridElements noneBorder"
            style={{ height: imgHeight / 3 }}
          ></div>
          <div
            className="gridElements"
            style={{
              height: imgHeight / 3,
              borderLeft: "none",
              borderRight: "none",
            }}
          ></div>
          <div className="gridElements" style={{ height: imgHeight / 3 }}></div>
          <div
            className="gridElements"
            style={{
              height: imgHeight / 3,
              borderLeft: "none",
              borderRight: "none",
            }}
          ></div>
          <div
            className="gridElements noneBorder"
            style={{ height: imgHeight / 3 }}
          ></div>
          <div
            className="gridElements"
            style={{
              height: imgHeight / 3,
              borderTop: "none",
              borderBottom: "none",
            }}
          ></div>
          <div
            className="gridElements noneBorder"
            style={{ height: imgHeight / 3 }}
          ></div>
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

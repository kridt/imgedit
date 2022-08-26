import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState("https://via.placeholder.com/300");
  const [imgHeight, setImgHeight] = useState(300);
  const [imgWidth, setImgWidth] = useState(300);
  const [blackNwhite, setBlackNwhite] = useState(true);
  const [contrast, setContrast] = useState(100);
  const [light, setLight] = useState(100);
  const [saturate, setSaturate] = useState(100);

  function chosenImg(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
    setTimeout(() => {
      setImgHeight(document.getElementById("theImg").height);
      setImgWidth(document.getElementById("theImg").width);
    }, 500);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Billed redigering</h1>

      <div>
        <input
          onChange={(e) => chosenImg(e)}
          type="file"
          accept=".png, .jpeg"
        />
      </div>

      <div className="filterOptions">
        <div>
          <label>Sort Hvid?</label>
          <input
            defaultChecked
            onClick={() => setBlackNwhite(!blackNwhite)}
            type="checkbox"
            name="blackNwhite"
            id="blackNwhite"
          />
        </div>
        <div>
          <label>Kontrast? {contrast}%</label>
          <input
            onChange={(e) => setContrast(e.target.value)}
            type="range"
            min={0}
            defaultValue={100}
            max={200}
            name="contrast"
            id="contrast"
          />
        </div>
        <div>
          <label>lys i billed? {light}%</label>
          <input
            onChange={(e) => setLight(e.target.value)}
            type="range"
            min={0}
            defaultValue={100}
            max={200}
            name="light"
            id="light"
          />
        </div>
        <div>
          <label>billed mætte? {saturate}%</label>
          <input
            onChange={(e) => setSaturate(e.target.value)}
            type="range"
            min={0}
            defaultValue={100}
            max={200}
            name="saturate"
            id="saturate"
          />
        </div>
      </div>

      <p style={{ textAlign: "center" }}>Dit redigerede billede</p>

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
          {blackNwhite ? (
            <>
              <img
                style={{
                  width: "300px",
                  filter: `grayscale(100%) contrast(${contrast}%) brightness(${light}%) saturate(${saturate}%)`,
                }}
                src={img}
                alt="pic"
                id="theImg"
              />
            </>
          ) : (
            <>
              <img
                style={{
                  width: "300px",
                  filter: `grayscale(0%) contrast(${contrast}%) brightness(${light}%) saturate(${saturate}%)`,
                }}
                src={img}
                alt="pic"
                id="theImg"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

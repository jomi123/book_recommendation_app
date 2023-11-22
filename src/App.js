import { useState } from "react";
import "./App.css";

function App() {
  const [jsbutton, setjsbutton] = useState();
  const [fictionbutton, setfictionbutton] = useState();
  const [business, setbusiness] = useState();

  function handleJavascriptOnClick() {
    setjsbutton(
      <div>
        <div
          style={{
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width: "20rem",
          }}
        >
          <div>Eloquent JavaScript</div>
          4/5
        </div>{" "}
        <br></br>
        <div
          style={{
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width: "20rem",
          }}
        >
          <div>You Don't Know JS</div>
          3.5/5
        </div>
      </div>
    );
  }

  function handleFictionOnClick() {
    setfictionbutton(
      <div>
        <div
          style={{
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width: "20rem",
          }}
        >
          <div>Shiva Trilogy</div>
          5/5
        </div>{" "}
        <br></br>
        <div
          style={{
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width: "20rem",
          }}
        >
          <div>Harry Potter and the Sorcerer's Stone</div>
          4.5/5
        </div>
      </div>
    );
  }

  function handleBusinessOnClick() {
    setbusiness(
      <div>
        <div
          style={{
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width: "20rem",
          }}
        >
          <div>Never Split the Difference</div>
          3.5/5
        </div>{" "}
        <br></br>
        <div
          style={{
            padding: "1rem",
            border: "1px solid black",
            borderRadius: "0.5rem",
            width: "20rem",
          }}
        >
          <div>Loonshots</div>
          5/5
        </div>
      </div>
    );
  }
  return (
    <div style={{ textAlign: "left", padding: "2rem" }}>
      <h3 style={{ fontSize: "2rem" }}>📚goodbooks</h3>
      <h5>Checkout my favorite books. Select a genre to get started</h5>
      <button
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          margin: "0.4rem",
          cursor: "pointer",
        }}
        onClick={handleJavascriptOnClick}
      >
        Javascript
      </button>
      <button
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          margin: "0.4rem",
          cursor: "pointer",
        }}
        onClick={handleFictionOnClick}
      >
        Fiction
      </button>
      <button
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          margin: "0.4rem",
          cursor: "pointer",
        }}
        onClick={handleBusinessOnClick}
      >
        Business
      </button>
      <hr></hr>
      {jsbutton}
      {fictionbutton}
      {business}
    </div>
  );
}

export default App;

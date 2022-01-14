import "./styles.css";

function Component() {
  return (
    <>
      <div className="button-box">
        <h1>Button </h1>
        <p>
          Buttons allow users to take actions, and make choices, with a single
          tap{" "}
        </p>

        <div className="sub-head"> BASIC</div>
        <div className="basic-box">
          <button className="basic contained">CONTAINED</button>
          <button className="basic text">TEXT</button>
          <button className="basic disable" disabled>
            DISABLE
          </button>
          <button className="basic outlined">OUTLINED</button>
        </div>
        <div className="sub-head">COLOR</div>
        <div className="basic-box">
          <button className="basic success">SUCCESS</button>
          <button className="basic danger">DANGER</button>
          <button className="basic error">ERROR</button>
          <button className="basic click">CLICK ME</button>
        </div>
        <div className="sub-head">SIZE</div>
        <div className="basic-box-size">
          <div className="size-box">
            <button className="basic l-primary">Primary</button>
            <button className="baic m-primary">Primary</button>
            <button className="basic s-primary">Primary</button>
          </div>

          <div className="size-box">
            <button className="basic outline-large">LARGE</button>
            <button className="basic outline-medium">MEDIUM</button>
            <button className=" basic outline-small">SMALL</button>
          </div>
        </div>
        <div className="sub-head"> LINK</div>
        <div className="basic-box">
          <a href="./">LINK</a>
        </div>
      </div>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

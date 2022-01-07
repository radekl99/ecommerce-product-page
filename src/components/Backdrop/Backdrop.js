import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const backdrop = (
    <div
      className={`top-0 w-screen h-screen z-10 bg-black opacity-50 ${props.className}`}
      onClick={props.onClick}
    ></div>
  );

  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop-root")
  );
};

export default Backdrop;

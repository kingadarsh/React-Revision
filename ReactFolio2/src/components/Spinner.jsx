import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner-content">
        <div className="custom-loader"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default Spinner;
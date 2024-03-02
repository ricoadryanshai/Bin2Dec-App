import { useState } from "react";
import "../styles/main.css";

// Business Logic
const useBinaryConverter = () => {
  const [binaryValue, setBinaryValue] = useState("");
  const [decimalValue, setDecimalValue] = useState("");

  const convertBinaryToDecimal = (binary) => {
    return parseInt(binary, 2);
  };

  const handleButton = (e) => {
    e.preventDefault();
    setDecimalValue(convertBinaryToDecimal(binaryValue));
  };

  const onBinaryInputChange = (e) => {
    const value = e.target.value;
    const binaryRegex = /^[01]{0,8}$/;

    if (!binaryRegex.test(value)) {
      setBinaryValue(binaryValue);
      setDecimalValue("Invalid input! Up to 8 digits (0 or 1)");
    } else {
      setBinaryValue(value);
      setDecimalValue("");
    }
  };

  return { binaryValue, decimalValue, onBinaryInputChange, handleButton };
};

// Presentational Component
const Main = () => {
  const { binaryValue, decimalValue, onBinaryInputChange, handleButton } =
    useBinaryConverter();

  return (
    <main>
      <section>
        <form>
          <div className="form-header">
            <h2>Binary to Decimal Converter</h2>
          </div>

          <label htmlFor="binaryInput" className="form-label">
            <span>Binary Input</span>
          </label>
          <div className="form-group">
            <input
              type="text"
              id="binaryInput"
              className="form-input"
              onChange={onBinaryInputChange}
              value={binaryValue}
            />
          </div>

          <label htmlFor="decimalOutput" className="form-label">
            <span>Decimal Output</span>
          </label>
          <div className="form-group">
            <input
              type="text"
              id="decimalOutput"
              className="form-input"
              value={decimalValue}
              disabled
            />
          </div>

          <div className="form-button">
            <button onClick={handleButton}>
              <span>Convert to Decimal</span>
            </button>
          </div>
        </form>

        <footer>
          <span>© 2024 Rico Aryan Shai</span>
        </footer>
      </section>
    </main>
  );
};

export default Main;

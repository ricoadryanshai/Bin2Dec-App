import { formArray } from "../js/form";
import "../styles/main.css";

const Main = () => {
  return (
    <main>
      <form>
        <div className="form-header">
          <h2>Binary to Decimal Converter</h2>
        </div>

        {formArray.map((form, index) => (
          <div key={index}>
            <label htmlFor={form.id} className="form-label">
              <span>{form.labelText}</span>
            </label>
            <div className="form-group">
              <input
                type="text"
                id={form.id}
                className="form-input"
                disabled={form.disabled}
              />
            </div>
          </div>
        ))}

        <div className="form-button">
          <button type="submit">
            <span>Convert to Decimal</span>
          </button>
        </div>
      </form>
    </main>
  );
};

export default Main;

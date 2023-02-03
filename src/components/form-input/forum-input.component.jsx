import "./form-input.styles.scss";
const FormInput = ({ label, ...otherPorps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherPorps} />
      {label && (
        <label
          className={`${
            otherPorps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

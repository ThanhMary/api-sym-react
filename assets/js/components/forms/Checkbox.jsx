const Checkbox = ({
    name,
    value,
    label,
    onChange,
    type = "checkbox",
    error = ""
  }) => (
    <div className="form-check">
        <input
        checked={value}
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        className={"form-check-input"}
      />
      <label htmlFor={name} className="form-check-label">{label}</label>
    
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  );
  
  export default Checkbox;
  
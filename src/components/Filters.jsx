export const Filters = ({
  Filters,
  label,
  isdisable,
  defaultValue,
  onChange,
  value,
}) => {
 
  const handleSelectChange = (e) => {
      onChange(e.target.value);
  };

  return (
    <>
      <div className="makeFilter w-100 fs-5">
        {" "}
        {label ? (
          <label htmlFor={label} className="fw-bold mb-2">
            {label}
          </label>
        ) : (
          <span></span>
        )}
        <select
          className="form-select fs-5"
          style={{ background: "" }}
          aria-label="Make"
          id={label}
          value={value || "all"}
          onChange={handleSelectChange}
        >
          <option value={"all"} disabled={isdisable} >
            {defaultValue ? defaultValue : "All"}
          </option>
          {Filters.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

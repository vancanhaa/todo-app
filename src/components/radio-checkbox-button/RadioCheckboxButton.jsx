import "./style.scss";

export default function RadioCheckboxButton({
  radioCheckboxClass,
  title,
  type,
  style,
  handleOnChange,
  name,
  disable,
  isChecked,
  value,
}) {
  return (
    <div
      className={`radioCheckboxClass ${radioCheckboxClass}`}
      style={{ ...style, cursor: disable ? "not-allowed" : "pointer" }}
    >
      <input
        type={type}
        checked={isChecked}
        name={name}
        disabled={disable}
        value={value}
        onClick={handleOnChange}
      />
      <span />
      <label htmlFor={name}>{title}</label>
    </div>
  );
}

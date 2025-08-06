function CommonInput({ type, placeholder, value, onChange, className, name, ...rest }) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || "Enter your value"}
      value={value || ""}
      name={name}
      onChange={onChange}
      className={className || "w-full text-black px-5 py-2 mt-2 border rounded-lg"}
      {...rest}
    />
  );
}

export default CommonInput;

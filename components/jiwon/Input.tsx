import React from "react";
import { InputFieldProps } from "./InputType";

const InputJiwon: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputJiwon;

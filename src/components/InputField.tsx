import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  searchClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const InputField = ({
  type,
  placeholder,
  onChange,
  value,
  name,
  searchClick
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="input-box">
      <input
        placeholder={placeholder}
        type={name === "search" ? "search" : isPasswordVisible ? "text" : type}
        value={value}
        onChange={onChange}
        name={name}
        className={`inputField-element ${
          name === "search" ? "search-field" : ""
        }`} 
      />

      {name === "search" && (
        <button
          type="button"
          className="search-icon"
          onClick={searchClick} // Add your search logic
        >
          <CiSearch/>
        
        </button>
      )}

      {type === "password" && (
        <span
          className="togglePasswordVisibility input-span"
          onClick={handleTogglePasswordVisibility}
        >
          {isPasswordVisible ? "HIDE" : "SHOW"}
        </span>
      )}
    </div>
  );
};

export default InputField;

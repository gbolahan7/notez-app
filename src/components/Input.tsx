import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  inputControl: "search-bar" | "text-field";
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}

function Input({
  inputControl,
  value,
  name,
  onChange,
  placeholder,
  type,
}: Props) {
  return (
    <div>
      {inputControl === "search-bar" ? (
        <div className="flex items-center gap-4 bg-white rounded-full pl-[21px] py-[10px] w-full">
          <FaSearch className="text-black" />
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="w-full rounded-full outline-none border-none"
            autoComplete="off"
          />
        </div>
      ) : (
        <div>
          <textarea placeholder={placeholder}></textarea>
        </div>
      )}
    </div>
  );
}

export default Input;

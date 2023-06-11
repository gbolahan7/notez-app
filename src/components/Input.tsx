import clsx from "clsx";
import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  inputControl: "search-bar" | "text-field" | "input-field";
  value: string;
  name: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
  const isInput =
    inputControl === "search-bar" || inputControl === "input-field";
  return (
    <div>
      {isInput ? (
        <div
          className={clsx(
            "flex items-center gap-4 bg-white pl-[21px] py-[10px] w-full",
            inputControl === "search-bar"
              ? "rounded-full"
              : "rounded-lg shadow-2xl"
          )}
        >
          {inputControl === "search-bar" && <FaSearch className="text-black" />}
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={clsx(
              "w-full outline-none border-none",
              inputControl === "search-bar" ? "rounded-full" : "rounded-lg"
            )}
            autoComplete="off"
          />
        </div>
      ) : (
        <div>
          <textarea
            className="w-full h-[392px] outline-none text-notez-grey-100"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          ></textarea>
        </div>
      )}
    </div>
  );
}

export default Input;

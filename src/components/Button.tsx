import { clsx } from "clsx";

interface Props {
  btnVariant: "primary" | "secondary" | "tertiary";
  text: string;
  size: "large" | "medium" | "small";
  btnType?: "submit" | "button";
  onClick?: () => void;
}

const Button = ({ btnVariant, text, size, onClick, btnType }: Props) => {
  const buttonStyle = clsx([
    "capitalize text-center rounded-full transition-all text-black hover:bg-black hover:text-notez-yellow-100",
    size === "large" && "w-[180px] h-10",
    size === "medium" && "w-[142px] h-10",
    size === "small" && "w-[113px] h-[26px]",
    btnVariant === "primary" && "bg-white",
    btnVariant === "secondary" && "bg-notez-grey-200",
    btnVariant === "tertiary" && "bg-notez-yellow-200",
  ]);

  return (
    <button
      className={clsx(buttonStyle)}
      onClick={onClick}
      type={btnType ?? "button"}
    >
      {text}
    </button>
  );
};

export default Button;

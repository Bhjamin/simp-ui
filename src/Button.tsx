import { Iconoir } from "iconoir";

const Button = () => {
  return (
    <>
      <button
        className=" px-6 py-2 bg-pink-400 rounded-md"
        onClick={() => alert("Hello")}
      >
        <Iconoir name="xmark-circle" className="w-6 h-6" color="white" />
      </button>
    </>
  );
};

export default Button;

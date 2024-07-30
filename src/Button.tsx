const Button = () => {
  return (
    <>
      <button
        className=" px-6 py-2 bg-pink-400 rounded-md"
        onClick={() => alert("Hello")}
      >
        <p className="text-white font-bold text-lg">Hello</p>
      </button>
    </>
  );
};

export default Button;

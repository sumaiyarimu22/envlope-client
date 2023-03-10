const Button = ({ text, submit, logout }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className={` text-white py-2 rounded  ${
        logout
          ? "bg-rose-500 hover:bg-red-600 px-4"
          : "bg-violet-500 hover:bg-violet-600 mt-4"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

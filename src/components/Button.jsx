const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-violet-500 text-white py-2 rounded hover:bg-violet-600 mt-4"
    >
      {text}
    </button>
  );
};

export default Button;

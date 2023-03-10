import React from "react";

const Button = ({ text, submit, logout, handleLogout }) => {
  return (
    <button
      onClick={handleLogout ? handleLogout : null}
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

export default React.memo(Button);

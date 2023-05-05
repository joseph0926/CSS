import React from "react";

const Card = ({ children, plus = "", onClick }) => {
  return (
    <div className={`border-4 border-cyan-900 p-6 hover:bg-black/20 transition-colors duration-300 ${plus}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;

import React from "react";

const Learnprops = ({text, handler}) => {

  return (
    <div>
      <button onClick={handler}>
        {text}
    </button>
    </div>
  );
};

export default Learnprops;

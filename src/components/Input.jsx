import React from "react";

import Img from "../assets/icons/img.png";
import Attach from "../assets/icons/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="input-send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;

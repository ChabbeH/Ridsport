import React from "react";
import "./BackDrop.css";

export const BackDrop = (props) => {
  return true ? (
    <div
      onClick={() => props.setOpenDrawer(false)}
      className={"BackDrop"}
    ></div>
  ) : null;
};

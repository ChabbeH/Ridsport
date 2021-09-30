import React from "react";
import "./SideBar.css";
import { useHistory } from "react-router";
import loggan from "../shared/images/loggan.png";

export const SideBar = (props) => {
  let drawerClasses = "side-drawer";
  if (props.openDrawer) {
    drawerClasses = "side-drawer open";
  }
  const history = useHistory();
  return (
    <nav className={drawerClasses}>
      <h1 onClick={() => props.setOpenDrawer(false)}>testklick</h1>

      <ul>
        <li onClick={() => history.push("/about")}>Om oss</li>
        <li onClick={() => history.push("/contact")}>Kontakta oss</li>
        <li onClick={() => history.push("/news")}>Nyheter</li>
        <li onClick={() => history.push("/faq")}>Vanliga frågor</li>
        <li onClick={() => history.push("/signin")} className="signIn">
          Logga in
        </li>
        <img
          onClick={() => history.push("/")}
          className="logotype"
          src={loggan}
          alt=""
        />
      </ul>
    </nav>
  );
};

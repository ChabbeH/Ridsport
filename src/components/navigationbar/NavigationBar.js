import React from "react";
import "./NavigationBar.css";
import { useHistory } from "react-router";
import loggan from "../../shared/images/loggan.png";

export const NavigationBar = () => {
  const history = useHistory();

  return (
    <div className="navigationBarWrapper">
      <div className="button">
        <img
          onClick={() => history.push("/")}
          className="logotype"
          src={loggan}
          alt=""
        />

        <span onClick={() => history.push("/about")}>Om oss</span>
        <span onClick={() => history.push("/contact")}>Kontakta oss</span>
        <span onClick={() => history.push("/news")}>Nyheter</span>
        <span onClick={() => history.push("/faq")}>Vanliga frågor</span>
        <span onClick={() => history.push("/signin")} className="signIn">
          Logga in
        </span>
      </div>
    </div>
  );
};

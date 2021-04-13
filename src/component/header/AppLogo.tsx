/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import applogo from "./applogo.png"; //"@res/applogo.png";

function AppLogo() {
  return (
    <>
      <div style={{ float: "left" }}>
        <img
          src={applogo}
          width="50px"
          height="50px"
          className="App-logo"
          alt="logo"
        />
      </div>
      <div style={{ fontSize: "2rem", float: "left" }}>Team name</div>
    </>
  );
}

export default AppLogo;

import React from "react";
import AppLogo from "./AppLogo";

function Header() {
  return (
    <header
      className="App-header"
      style={{
        width: "100%",
        height: "150px",
      }}
    >
      <div style={{ width: "33%" }}>
        <AppLogo />
      </div>
    </header>
  );
}

export default Header;

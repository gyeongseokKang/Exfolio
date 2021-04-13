import React from "react";
import AppLogo from "./AppLogo";

function Header() {
  return (
    <header
      className="App-header"
      style={{
        width: "100%",
        height: "150px",
        backgroundColor: "gray",
      }}
    >
      <div style={{ border: "1px solid", float: "left", width: "33%" }}>
        <AppLogo />
      </div>
      <div style={{ border: "1px solid", float: "left", width: "33%" }}>
        주식 종목 검색
      </div>
      <div style={{ border: "1px solid", float: "left", width: "33%" }}>
        빈공간
      </div>
    </header>
  );
}

export default Header;

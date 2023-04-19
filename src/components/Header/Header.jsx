import React from "react";

const Header = () => {
  const headStyle = {
    width: "100%",
    height: 100,
    background: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  const spanStyle = {
    fontSize: "35px",
    cursor: "pointer",
    color: "black",
  };
  return (
    <div>
      <div style={headStyle}>
        <span style={spanStyle}>Home</span>
        <span style={spanStyle}>Info</span>
        <span style={spanStyle}>Favorite</span>
      </div>
    </div>
  );
};

export default Header;

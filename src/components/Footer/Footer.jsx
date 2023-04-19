import React from "react";

const Footer = () => {
  const footerStyle = {
    width: "100%",
    height: 140,
    background: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 0,
  };
  const footerContStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const spanStyle = {
    fontSize: "30px",
    cursor: "pointer",
    color: "black",
  };
  return (
    <div style={footerStyle}>
      <div style={footerContStyle}>
        <span style={spanStyle}>Instagram</span>
        <span style={spanStyle}>Facebook</span>
      </div>
      <div style={footerContStyle}>
        <span style={spanStyle}>Legal</span>
        <span style={spanStyle}>Site Map</span>
      </div>
      <div style={footerContStyle}>
        <span style={spanStyle}>Privacy Policy</span>
        <span style={spanStyle}>Terms of Use</span>
      </div>
    </div>
  );
};

export default Footer;

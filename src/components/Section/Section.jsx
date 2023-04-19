import React from "react";

const Section = (props) => {
  const styleContainer = {
    background: "black",
    width: "100%",
    height: "530px",
  };
  const styleTable = {
    padding: "4% 0 0 20%",
    width: "80%",
  };
  const telemStyle1 = {
    fontSize: "34px",
    padding: "40px 0 0 0",
    color: "red",
  };
  const telemStyle2 = {
    fontSize: "34px",
    padding: "40px 0 0 0",
    color: "violet",
  };
  const telemStyle3 = {
    fontSize: "34px",
    padding: "40px 0 0 0",
    color: "gold",
  };
  const styleTableTh = {
    padding: "0 0 0 20%",
    width: "80%",
    position: "absolute",
    display: "flex",
    gap: "19.5%",
  };
  const tspanStyle = {
    fontSize: "36px",
    padding: "40px 0 0 0",
    color: "white",
  };
  return (
    <div style={styleContainer}>
      <div style={styleTableTh}>
        <span style={tspanStyle}>Name</span>
        <span style={tspanStyle}>Lastname</span>
        <span style={tspanStyle}>Age</span>
      </div>
      <table style={styleTable}>
        {props.users.map((elem) => (
          <tr key={elem.id}>
            <td style={telemStyle1}>{elem.name}</td>
            <td style={telemStyle2}>{elem.lastName}</td>
            <td style={telemStyle3}>{elem.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Section;

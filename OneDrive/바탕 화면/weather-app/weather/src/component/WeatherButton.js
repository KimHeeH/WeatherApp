import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button
        style={{
          border: "1px solid rgb(158, 158, 158)",
          color: "black",
          margin: 10,
        }}
        variant="outline-light"
      >
        Current Location
      </Button>
      <Button
        style={{
          border: "1px solid rgb(158, 158, 158)",
          color: "black",
          margin: 10,
        }}
        variant="outline-light"
      >
        Paris
      </Button>
      <Button
        style={{
          border: "1px solid rgb(158, 158, 158)",
          color: "black",
          margin: 10,
        }}
        variant="outline-light"
      >
        New York
      </Button>
    </div>
  );
};

export default WeatherButton;

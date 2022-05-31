import React, { useState } from "react";
import PropTypes from "prop-types";
import "./calcular.css";

export default function Calcular(onAddDices, Dices) {
  const addDices = () => {
    onAddDices(1, 150, 5);
  };

  return (
    <div>
      <div className=".button">
        <button onClick={addDices}>Calcular</button>
      </div>
    </div>
  );
}
Calcular.propTypes = {
  onAddDices: PropTypes.func.isRequired,
  Dices: PropTypes.number.isRequired
};

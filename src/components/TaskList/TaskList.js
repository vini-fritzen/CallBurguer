import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tasklist.css";

export default function Tasklist({ title, onAddDices, Dices }) {
  const [count, setCount] = useState(0);

  const adicionar = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const diminuir = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        <button onClick={adicionar}>Adicionar</button>
        <button onClick={diminuir}>Diminuir</button>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
  title: PropTypes.string.isRequired
};

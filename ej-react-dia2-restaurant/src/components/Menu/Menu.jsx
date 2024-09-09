// menu.js
import React from "react";

const Menu = (props) => {
  const { dishes } = props;

  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.name}</h3>
          <p>Description: {dish.description}</p>
          <p>Price: {dish.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;

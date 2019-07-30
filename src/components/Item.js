import React from "react";

function Item(props) {
  return (
    <div className="item">
      <p>{props.name}</p>
    </div>
  );
}

export default Item;

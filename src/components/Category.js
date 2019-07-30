import React from "react";
import Item from "./Item.js";
function Category(props) {
  const boxes = props.topNine;

  return (
    <div className="category-container">
      <p>{props.categoryTitle}</p>
      <section className="top-nine-box">
        {boxes.map(box => (
          <Item name={box.name} />
        ))}
      </section>
    </div>
  );
}

export default Category;

import React, { useState } from "react";
import EditForm from "./EditForm.js";
import { Icon } from "semantic-ui-react";
function Item(props) {
  const [isEditing, setIsEditing] = useState(false);
  const passedSetName = props.passedSetName;

  function handleChange() {
    setIsEditing(!isEditing);
  }

  return (
    <div className="item">
      <Icon onClick={handleChange} name="edit" />
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Item;

import React from "react";
import { Icon } from "semantic-ui-react";
function Item(props) {
  return (
    <div className="item">
      <Icon name="edit" />
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Item;

// const IconExampleBordered = () => (
//   <div>
//     <Icon bordered name='users' />
//     <Icon bordered color='teal' name='users' />
//     <Icon bordered inverted color='black' name='users' />
//     <Icon bordered inverted color='teal' name='users' />
//   </div>
// )

import React from 'react';

function GroceryItem(props) {
  function handleClick() {
      alert(`You clicked on ${props.name}`)
  }

  return (
      <button onClick={handleClick}>{props.name}</button>
  );
}

export default GroceryItem;
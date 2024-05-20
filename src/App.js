import React from 'react';
import GroceryItem  from "./GroceryItem";


function App() {
    return (
        <div>
            <h2>Grocery List</h2>
            <GroceryItem name="Egg" />
            <GroceryItem name="Banana" />
            <GroceryItem name="Strawberry" />
            <GroceryItem name="Bread" />
        </div>
    );
}

export default App
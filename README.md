## React Grocery Store

Create a simple online grocery store with reusable React function components. Your store should provide users with at least four buttons for possible items they can purchase. Every time a user clicks on a button, it should alert that the thing they’ve clicked on has been added to the cart via an alert message.

Create a *GroceryItem.js* file.
Define a `GroceryItem` function component.
The component should accept props and return a button that displays the grocery item’s name and contain an event handler for the `onClick` event.
The component should be used to render the four grocery items, passing in the appropriate props.
In *App.js*, return four instances of the `GroceryItem` component with names such as `Egg`, `Banana`, `Strawberry`, or `Bread`. The items are up to you!
import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingList.css";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, { text: newItem, completed: false }]);
    setNewItem("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index, newText) => {
    const updatedItems = [...items];
    updatedItems[index].text = newText;
    setItems(updatedItems);
  };

  return (
    <div className="shopping-list">
      <h1>SHOPPING LIST</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          item={item}
          index={index}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
}

export default ShoppingList;

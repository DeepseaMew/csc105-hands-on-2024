import React, { useState } from "react";
import "./ShoppingItem.css";

function ShoppingItem({ item, index, removeItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.text);

  const handleEdit = () => {
    editItem(index, newText);
    setIsEditing(false);
  };

  return (
    <div className={`item ${item.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{item.text}</span>
      )}

      {isEditing ? (
        <button onClick={handleEdit} className="edit">
          Save
        </button>
      ):(
        <button onClick={() => setIsEditing(true)} className="edit">
          Edit
        </button>
      )}

      <button onClick={() => removeItem(index)} className="remove">
        Remove
      </button>
    </div>
  );
}
export default ShoppingItem;

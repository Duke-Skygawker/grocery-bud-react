import { useState } from "react";

const SignleItem = ({ item, removeItem, editItem }) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </article>
  );
};
export default SignleItem;

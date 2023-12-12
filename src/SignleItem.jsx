import { useState } from "react";

const SignleItem = ({ item, removeItem }) => {
  const { id, name, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p>{name}</p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </article>
  );
};
export default SignleItem;

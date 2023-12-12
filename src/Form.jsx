import { nanoid } from "nanoid";
import { useState } from "react";

const Form = ({ items, setItems, toast, saveList }) => {
  const [item, setItem] = useState("");

  const addNewItem = () => {
    const newItems = [...items];
    const newItem = { name: item, id: nanoid(), completed: false };
    newItems.push(newItem);
    setItems(newItems);
    toast.success(item + " added to the list");
    saveList(newItems);
    setItem("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error("Invalid Value, cannot submit empty.");
      return;
    }
    addNewItem();
  };
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <section className="">
      <form className="" action="" onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <article className="form-control">
          <input
            className="form-input"
            type="text"
            name="item"
            value={item}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Add Item
          </button>
        </article>
      </form>
    </section>
  );
};
export default Form;

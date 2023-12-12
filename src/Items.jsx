import SignleItem from "./SignleItem";

const Items = ({ items, setItems, toast, saveList, editItem }) => {
  const removeItem = (id) => {
    const removedItem = items.filter((item) => item.id === id);
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    saveList(newItems);
    toast.warning("Removed " + removedItem[0].name);
  };

  const clearList = () => {
    setItems([]);
    localStorage.clear();
    toast.warning("cleared the list");
  };
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SignleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
      <button
        className="btn remove-btn"
        style={items.length !== 0 ? { display: "" } : { display: "none" }}
        onClick={clearList}
      >
        Clear the List
      </button>
    </section>
  );
};
export default Items;

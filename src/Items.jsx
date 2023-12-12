import SignleItem from "./SignleItem";

const Items = ({ items, setItems }) => {
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const clearList = () => {
    setItems([]);
  };
  return (
    <section className="items">
      {items.map((item) => {
        return <SignleItem key={item.id} item={item} removeItem={removeItem} />;
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

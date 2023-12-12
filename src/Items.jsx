import SignleItem from "./SignleItem";

const Items = ({ items, setItems }) => {
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  return (
    <section className="items">
      {items.map((item) => {
        return <SignleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </section>
  );
};
export default Items;

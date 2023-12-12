import { useEffect, useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState([]);
  // could add a functionality to set the "completed" items to a different list, as well as ability to collapse that list

  const saveLocally = (si) => {
    localStorage.setItem("items", JSON.stringify(si));
  };

  const loadLocally = () => {
    const localArray = localStorage.getItem("items");

    if (localArray) {
      const localList = JSON.parse(localArray);
      setItems(localList);
    } else if (localArray === undefined) {
      localStorage.clear();
    }
  };
  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    saveLocally(newItems);
  };
  useEffect(() => {
    loadLocally();
  }, []);
  return (
    <main>
      <div className="section-center">
        <Form
          items={items}
          setItems={setItems}
          toast={toast}
          saveList={saveLocally}
        />
        <Items
          items={items}
          setItems={setItems}
          toast={toast}
          saveList={saveLocally}
          editItem={editItem}
        />
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </main>
  );
};

export default App;

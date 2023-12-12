import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState([]);
  // could add a functionality to set the "completed" items to a different list, as well as ability to collapse that list

  return (
    <main>
      <div className="section-center">
        <Form items={items} setItems={setItems} toast={toast} />
        <Items items={items} setItems={setItems} toast={toast} />
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </main>
  );
};

export default App;

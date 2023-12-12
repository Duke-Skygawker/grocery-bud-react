import { useState } from "react";
import Form from "./Form";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <main className="section-center">
      <Form items={items} setItems={setItems} />
      <Items items={items} setItems={setItems} />
    </main>
  );
};

export default App;

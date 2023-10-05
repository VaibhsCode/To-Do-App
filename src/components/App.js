import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Packinglist } from "./Packinglist";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
export default function App() {
  const [item, setItem] = useState([]);
  function handleItem(item) {
    setItem((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure want to delete items present in the list?"
    );
    if (confirmed) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleItem} />
      <Packinglist
        items={item}
        onDeleteItem={handleDelete}
        onToggleItems={handleToggle}
        onClearItem={handleClear}
      />
      <Stats item={item} />
    </div>
  );
}

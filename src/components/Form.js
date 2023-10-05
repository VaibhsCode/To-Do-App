import { useState } from "react";

export function Form({ onAddItem }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newitem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newitem);
    onAddItem(newitem);

    setquantity(1);
    setdescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want to pack for the trip</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((nums) => (
          <option value={nums} key={nums}>
            {nums}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items.."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

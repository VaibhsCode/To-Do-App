import { useState } from "react";
import { Item } from "./Item";

export function Packinglist({
  items,
  onDeleteItem,
  onToggleItems,
  onClearItem,
}) {
  let [sortBy, setSortItem] = useState("input");
  let sortItems;
  if (sortBy === "input") sortItems = items;

  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  // console.log(sortItems);
  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortItem(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Descrption</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button onClick={onClearItem}>Clear</button>
      </div>
    </div>
  );
}

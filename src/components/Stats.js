export function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Add items to your packing list🚀</em>
      </p>
    );

  const numItems = item.length;
  const numPacked = item.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go!✈️"
          : `You have ${numItems} item on your list ,and you have already packed ${numPacked} items (${percentage} %)`}
      </em>
    </footer>
  );
}

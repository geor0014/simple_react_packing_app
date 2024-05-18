export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start Adding Items</p>;

  const numItems = items.length;

  const itemsPacked = items.filter((items) => {
    return items.packed;
  }).length;

  const percentage = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Well done! You are all packed and ready to go!"
          : `You have ${numItems} items in your list, and you already packed ${itemsPacked} items ${percentage}%.`}
      </em>
    </footer>
  );
}

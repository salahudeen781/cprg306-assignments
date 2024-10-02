import ItemList from "./item-list";

export default function Page() {
  return (
    <header>
      <h1 className="text-5xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </header>
  );
}

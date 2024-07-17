import ClassItem from "./components/ClassItems";
import FunctionalItems from "./components/FunctionalItems";

function App() {
  const items = ["Banana", "Guava", "Apple", "Pineapple", "Mango", "Papaya"];

  return (
    <div>
      <h1>Functional Component</h1>
      <FunctionalItems items={items} />

      <h1>Class Component</h1>
      <ClassItem items={items} />
    </div>
  );
}

export default App;

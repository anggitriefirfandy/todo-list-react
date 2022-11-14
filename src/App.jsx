
import "./App.css";
import TodoList from "./components/TodoList";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="App">
      <Todos />
      <TodoList />
    </div>
  );
}

export default App;

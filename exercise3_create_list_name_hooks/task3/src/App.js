// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";
import { mockUsers } from "./mockData";

function App() {
  console.log("didalam appjs", mockUsers);
  return (
    <>
      <Header />
      <ListTodo users={mockUsers} />
    </>
  );
}

export default App;

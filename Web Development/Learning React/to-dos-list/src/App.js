import "./App.css";
import Header from "./Components/Header";
import ToDos from "./Components/To-Dos";
import ToDo from "./Components/To-Do";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header title="To-Do List" />
      <ToDo />
      <ToDos />
      <Footer />
    </>
  );
}

export default App;

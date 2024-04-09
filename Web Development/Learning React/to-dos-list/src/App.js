import "./App.css";
import Header from "./Components/Header";
import ToDos from "./Components/To-Dos";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header title="To-Do List" />
      <ToDos />
      <Footer />
    </>
  );
}

export default App;

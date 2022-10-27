import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetin={"Hola amigos"} />
      <footer>Creado por Mauricio</footer>
    </>
  );
}

export default App;

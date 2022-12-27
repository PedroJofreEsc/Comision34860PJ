//import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Cartwidget from './component/Cartwidget/cartwidget';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Cartwidget />
        <Navbar />
        <ItemListContainer greeting={"hola"} />

      </header>
    </div>
  );
}

export default App;

import './scss/styles.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About/>
        <Products />
    </div>
  );  
}

export default App;

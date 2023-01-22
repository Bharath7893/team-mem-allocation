import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Employees/>
      <Footer></Footer>
    </div>
  );
}

export default App;

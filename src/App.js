import './App.css';
import Class from './components/Class';
import Pagination from './components/Pagination';
import Switch from './components/Switch';
import Ternary from './components/Ternary';

function App() {
  return (
    <div className="App">
      {/* <Pagination/> */}
      <Class />
      {/* <Ternary /> */}
      <Switch/>
    </div>
  );
}

export default App;

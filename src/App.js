import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shows from './component/Shows';
//mport Fetchdata from './component/Fetchdata';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Showdetails from './component/Showdetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<Shows/>} />
        <Route path='/showdetails/:id' element={<Showdetails/>} />
        </Routes>
      {/* <Fetchdata/> */}
      </div>
    </Router>
  );
}

export default App;

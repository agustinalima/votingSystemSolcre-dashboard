import './App.css';

import Dashboard from './pages/Dashboard';
import LoginAdmin from './pages/LoginAdmin';
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}




export default App;

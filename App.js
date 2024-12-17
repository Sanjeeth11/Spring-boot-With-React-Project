
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmployeeComponent/>}/>
    </Routes>
   </BrowserRouter>
   
  
  );
}

export default App;

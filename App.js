
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


{
  "name": "sbreactproject",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^1.7.9",
    "cra-template": "1.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.2",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

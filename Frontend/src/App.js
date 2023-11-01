import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./screens/products";
import Display from './screens/productDisplay';
import Layout from './components/Layout';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header/>
        <div className="App">
          <Routes>
            <Route path='/products' element={<Products />}/>
            <Route path='/product' element={<Display />}/>
          </Routes>
        </div>

    </Router>
  );
}

export default App;

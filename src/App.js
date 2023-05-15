import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./Pages/Main"
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Pages/ProductList';
import Bookmark from './Pages/Bookmark';

function App () {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/list" element={<ProductList />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



export default App;

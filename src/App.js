import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./Pages/Main"
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Pages/ProductList';
import BookmarkList from './Pages/BookmarkList';
import NotifyBox from './Components/NotifyBox';

function App () {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/list" element={<ProductList />} />
        <Route path="/bookmark" element={<BookmarkList />} />
      </Routes>
      <NotifyBox />
      <Footer />
    </BrowserRouter>
  );
}



export default App;

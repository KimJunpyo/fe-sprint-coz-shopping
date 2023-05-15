import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./Pages/Main"
import Header from './Components/Header';
import Footer from './Components/Footer';

function App () {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



export default App;

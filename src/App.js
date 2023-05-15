import './App.css';
import CodestatesLogo from "./Assets/logo.png";
import Hamburger from "./Assets/햄버거 버튼.png";
import { GoGift } from "react-icons/go"
import {BsStar} from "react-icons/bs"
import { useState, useEffect, useRef } from 'react';
function App () {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const handleHamburgerButton = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOut);

    return () => {
      document.removeEventListener('mousedown', clickModalOut);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const clickModalOut = (event) => {
    if (isOpen && !modalRef.current.contains(event.target)) {
      handleHamburgerButton();
    }
  }

  return (
    <div className="App" >
      <div className="w-full h-20 bg-white shadow-headerShadow flex justify-between items-center select-none">
        <div className='relative'>
          <img src={CodestatesLogo} alt="코드스테이츠 로고" className="absolute left-10 cursor-pointer" />
          <p className='ml-28 text-2xl font-bold'>COZ Shopping</p>
        </div>
        <div className='relative cursor-pointer' ref={modalRef}>
          <div className='mr-16' >
            <img src={Hamburger} alt="햄버거 버튼" onClick={handleHamburgerButton} />
          </div>
          {isOpen && <HamburgerModal />}
        </div>
      </div>
    </div>
  );
}

function HamburgerModal () {
  return <div className='absolute top-10 right-8 w-52 flex flex-col bg-white rounded-xl shadow-burgerShadow'>
    <div className='flex h-12 items-center justify-center'>김준표님, 안녕하세요!</div>
    <div className='flex h-12 items-center justify-start border-2 border-x-0 pl-5'>
      <GoGift />
      <p className='m-2'>상품리스트 페이지</p>
    </div>
    <div className='flex h-12 items-center justify-start pl-5'>
      <BsStar />
      <p className='m-2'>북마크 페이지</p>
    </div>
  </div>
}

export default App;

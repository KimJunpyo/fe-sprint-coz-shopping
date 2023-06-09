import CodestatesLogo from "../Assets/Images/logo.png";
import Hamburger from "../Assets/Images/hamburgerButton.png";
import {useState, useEffect, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
import HamburgerModal from "./HamburgerModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const modalRef = useRef();

  const handleHamburgerButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOut);

    return () => {
      document.removeEventListener("mousedown", clickModalOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const clickModalOut = (event) => {
    if (isOpen && !modalRef.current.contains(event.target)) {
      handleHamburgerButton();
    }
  };

  const handleReload = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  return (
    <header className="z-10 w-full h-20 bg-white shadow-headerShadow flex justify-between items-center select-none sticky top-0">
      <div className="relative">
        <Link to="/">
          <img
            src={CodestatesLogo}
            alt="코드스테이츠 로고"
            className="absolute left-10 cursor-pointer"
            onClick={handleReload}
          />
        </Link>
        <p className="ml-28 text-2xl font-bold">COZ Shopping</p>
      </div>
      <div className="relative cursor-pointer" ref={modalRef}>
        <div className="mr-16">
          <img
            src={Hamburger}
            alt="햄버거 버튼"
            onClick={handleHamburgerButton}
          />
        </div>
        {isOpen && <HamburgerModal />}
      </div>
    </header>
  );
}

export default Header;

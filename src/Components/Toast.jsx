import {useEffect, useState} from "react";
import bookmarkOn from "../Assets/Images/bookmarkIconOn.png";

function Toast({message, delayTime}) {
  const [isHide, setIsHide] = useState(false);
  console.log(isHide);

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setIsHide(true);
      }
    }, delayTime - 500);
  }, []);

  return (
    <div
      className={`font-bold w-72 h-12 bg-white rounded-xl shadow-burgerShadow m-2 flex justify-start items-center ${
        isHide ? "animate-fade-out" : "animate-toast-in-right"
      }`}
    >
      <img src={bookmarkOn} alt="북마크-on" className="m-2" />
      {message}
    </div>
  );
}

export default Toast;

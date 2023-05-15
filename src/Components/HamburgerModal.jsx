import {GoGift} from "react-icons/go";
import {BsStar} from "react-icons/bs";

function HamburgerModal() {
  return (
    <div className="absolute top-10 right-8 w-52 flex flex-col bg-white rounded-xl shadow-burgerShadow">
      <div className="flex h-12 items-center justify-center">
        김준표님, 안녕하세요!
      </div>
      <div className="flex h-12 items-center justify-start border-2 border-x-0 pl-5">
        <GoGift />
        <p className="m-2">상품리스트 페이지</p>
      </div>
      <div className="flex h-12 items-center justify-start pl-5">
        <BsStar />
        <p className="m-2">북마크 페이지</p>
      </div>
    </div>
  );
}

export default HamburgerModal;

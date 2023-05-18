import {useEffect, useRef} from "react";
import {styled} from "styled-components";
import CloseButton from "../Assets/Images/closeButton.png";
import Bookmark from "./Bookmark";

function ProductCardModal({title, image_url, id, handleClick}) {
  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", clickModalOut);

    return () => {
      document.removeEventListener("mousedown", clickModalOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick]);

  const clickModalOut = (event) => {
    if (handleClick && !modalRef.current.contains(event.target)) {
      handleClick();
    }
  };

  return (
    <ModalContainer className="z-10 flex justify-center items-center fixed top-0 left-0 w-full h-full">
      <Modal
        ref={modalRef}
        img={image_url}
        className="rounded-xl shadow-productCardShadow flex flex-col justify-between"
      >
        <div className="w-full flex justify-end p-5">
          <img src={CloseButton} alt="종료 버튼" onClick={handleClick} />
        </div>
        <div className="flex m-6 items-center">
          <div className="mr-2">
            <Bookmark id={id} />
          </div>
          <div className="text-white text-2xl font-bold">{title}</div>
        </div>
      </Modal>
    </ModalContainer>
  );
}

const Modal = styled.div`
  width: 46.5rem;
  height: 30rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

const ModalContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
`;

export default ProductCardModal;

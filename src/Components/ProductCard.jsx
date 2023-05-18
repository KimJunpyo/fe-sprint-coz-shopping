import {useState} from "react";
import Card from "./Card";
import {styled} from "styled-components";
import ProductCardModal from "./ProductCardModal";
import {PRODUCT_TYPE_LIST} from "../Assets/ConstantValue";

function ProductCard({product}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    id,
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
  } = product;

  const handleClick = (event) => {
    if (event === undefined) {
      setIsOpenModal(false);
      return;
    }
    if (event.target.classList.contains("bookmark-icon")) {
      return;
    }
    setIsOpenModal(!isOpenModal);
  };

  let content = null;

  if (type === PRODUCT_TYPE_LIST.PRODUCT) {
    content = (
      <>
        <Card imgUrl={image_url} id={id} />
        <div className="flex justify-between">
          <div className="font-extrabold">{title}</div>
          <div className="flex flex-col items-end">
            <div className="text-blue-purple font-extrabold">
              {discountPercentage}%
            </div>
            <div className="font-medium">{price}</div>
          </div>
        </div>
      </>
    );
  }
  if (type === PRODUCT_TYPE_LIST.CATEGORY) {
    content = (
      <>
        <Card imgUrl={image_url} id={id} />
        <div className="font-extrabold"># {title}</div>
      </>
    );
  }
  if (type === PRODUCT_TYPE_LIST.EXHIBITION) {
    content = (
      <>
        <Card imgUrl={image_url} id={id} />
        <div className="flex flex-col">
          <div className="font-extrabold">{title}</div>
          <div>{sub_title}</div>
        </div>
      </>
    );
  }
  if (type === PRODUCT_TYPE_LIST.BRAND) {
    content = (
      <>
        <Card imgUrl={brand_image_url} id={id} />
        <div className="flex justify-between">
          <div className="font-extrabold">{brand_name}</div>
          <div className="flex flex-col items-end">
            <div className="font-bold">관심고객수</div>
            <div>{follower.toLocaleString()}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ProductCardSize onClick={handleClick}>{content}</ProductCardSize>
      {isOpenModal && (
        <ProductCardModal
          title={type === "Brand" ? brand_name : title}
          image_url={type === "Brand" ? brand_image_url : image_url}
          id={id}
          handleClick={handleClick}
        />
      )}
    </>
  );
}

const ProductCardSize = styled.div`
  height: 16.5rem;
  width: 16.5rem;
  user-select: none;
  margin: 0 0.5rem 0;
`;

export default ProductCard;

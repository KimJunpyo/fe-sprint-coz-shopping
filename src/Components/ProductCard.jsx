import {useState} from "react";
import Card from "./Card";
import {styled} from "styled-components";
import ProductCardModal from "./ProductCardModal";

function ProductCard({product}) {
  const [isClick, setIsClick] = useState(false);

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
      setIsClick(false);
      return;
    }
    if (event.target.classList.contains("bookmark-icon")) {
      return;
    }
    setIsClick(!isClick);
  };

  let content = null;

  if (type === "Product") {
    content = (
      <>
        <Card image_url={image_url} id={id} />
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
  if (type === "Category") {
    content = (
      <>
        <Card image_url={image_url} id={id} />
        <div className="font-extrabold"># {title}</div>
      </>
    );
  }
  if (type === "Exhibition") {
    content = (
      <>
        <Card image_url={image_url} id={id} />
        <div className="flex flex-col">
          <div className="font-extrabold">{title}</div>
          <div>{sub_title}</div>
        </div>
      </>
    );
  }
  if (type === "Brand") {
    content = (
      <>
        <Card image_url={brand_image_url} id={id} />
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
      {isClick && (
        <ProductCardModal
          title={type === "Brand" ? brand_name : title}
          image_url={type === "Brand" ? brand_image_url : image_url}
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
`;

export default ProductCard;

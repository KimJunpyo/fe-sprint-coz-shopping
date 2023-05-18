import ProductCard from "./ProductCard";
import {handleResize} from "../Utils/ResizeUtil";
import {useState, useEffect} from "react";

function ProductSection({title, list}) {
  const [productList, setProductList] = useState(list);

  useEffect(() => {
    const handleProductListResize = handleResize(list, setProductList);
    window.addEventListener("resize", handleProductListResize);
    handleProductListResize();

    return () => {
      window.removeEventListener("resize", handleProductListResize);
    };
  }, [list]);

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold ml-2 my-5">{title}</div>
      <div className="flex justify-around">
        {productList &&
          productList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default ProductSection;

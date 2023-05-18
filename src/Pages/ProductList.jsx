import {useDispatch} from "react-redux";
import ProductCard from "../Components/ProductCard";
import {useEffect, useState} from "react";
import {LocalStorage} from "../Utils/BrowserStorage";
import {getProducts} from "../Apis/DataSetup";
import {setProduct} from "../Actions";
import {CATEGORY_LIST} from "../Assets/ConstantValue";
import ProductCategory from "../Components/ProductCategory";
import {shuffleArray} from "../Utils/ArrayUtil";
import {handleFilterProductList} from "../Utils/ArrayUtil";

function ProductList() {
  const [productList, setProductList] = useState();
  const [randomProductList, setRandomProductList] = useState();
  const [isClickCategory, setIsClickCategory] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProductList = LocalStorage.get("productList");
    if (storedProductList) {
      setProductList(shuffleArray(JSON.parse(storedProductList)));
    } else {
      getProducts()
        .then((res) => {
          const products = shuffleArray(res.data);
          setProductList(products);
          LocalStorage.set("productList", JSON.stringify(products));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (productList) {
      setRandomProductList(productList);
      dispatch(setProduct(productList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  useEffect(() => {
    if (productList) {
      handleFilterProductList(
        setRandomProductList,
        isClickCategory,
        productList
      );
    }
  }, [isClickCategory]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        {CATEGORY_LIST.map((category, idx) => (
          <ProductCategory
            category={category.title}
            categoryImg={category.imgUrl}
            isClickCategory={isClickCategory}
            setIsClickCategory={setIsClickCategory}
            idx={idx}
            key={category.title}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-around">
        {randomProductList &&
          randomProductList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;

import {useState, useEffect} from "react";
import {getProducts} from "../Apis/DataSetup";
import ProductCard from "../Components/ProductCard";
import {useDispatch} from "react-redux";
import {setProduct} from "../Actions";
import {LocalStorage} from "../Utils/BrowserStorage";

function Main() {
  const [productList, setProductList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProductList = LocalStorage.get("productList");
    if (storedProductList) {
      setProductList(JSON.parse(storedProductList));
    } else {
      getProducts()
        .then((res) => {
          const products = res.data;
          setProductList(products);
          LocalStorage.set("productList", JSON.stringify(products));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (productList) dispatch(setProduct(productList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  return (
    <div>
      {productList &&
        productList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

export default Main;

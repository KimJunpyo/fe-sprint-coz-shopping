import {useState, useEffect} from "react";
import {getProducts} from "../Apis/DataSetup";
import ProductCard from "../Components/ProductCard";
import {useDispatch} from "react-redux";
import {setProduct} from "../Actions";
import {LocalStorage} from "../Utils/BrowserStorage";
import {debounce} from "../Utils/TimerUtils";

function Main() {
  const [productList, setProductList] = useState();
  const [randomProductList, setRandomProductList] = useState([]);
  const [showProductList, setShowProductList] = useState([]);
  const dispatch = useDispatch();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * array.length);
      [array[i], array[randomNum]] = [array[randomNum], array[i]];
    }
    return array;
  };

  const handleResize = debounce(() => {
    setShowProductList(() => {
      return randomProductList.slice(0, Math.floor(window.innerWidth / 300));
    });
  }, 50);

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
    if (productList) {
      setRandomProductList(() => {
        return shuffleArray(productList);
      });
      dispatch(setProduct(productList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [randomProductList]);
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold ml-2 my-5">상품 리스트</div>
      <div className="flex justify-around">
        {showProductList &&
          showProductList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Main;

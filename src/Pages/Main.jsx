import {useState, useEffect} from "react";
import {getProducts} from "../Apis/DataSetup";
import ProductSection from "../Components/ProductSection";
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from "../Reduxes/Actions";
import {LocalStorage} from "../Utils/BrowserStorage";
import {LIST_TITLE} from "../Assets/ConstantValue";
import {shuffleArray} from "../Utils/ArrayUtil";

function Main() {
  const [productList, setProductList] = useState();
  const [randomProductList, setRandomProductList] = useState();
  const [bookmarkList, setBookmarkList] = useState();
  const dispatch = useDispatch();
  const bookmarkState = useSelector((state) => state.bookmarkReducer);

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
      setBookmarkList(
        productList.filter((product) => bookmarkState.includes(product.id))
      );
      dispatch(setProduct(productList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  useEffect(() => {
    if (productList) {
      setBookmarkList(
        productList.filter((product) => bookmarkState.includes(product.id))
      );
    }
  }, [bookmarkState]);

  return (
    <>
      {randomProductList && (
        <ProductSection title={LIST_TITLE.PRODUCT} list={randomProductList} />
      )}

      {bookmarkList && (
        <ProductSection title={LIST_TITLE.BOOKMARK} list={bookmarkList} />
      )}
    </>
  );
}

export default Main;

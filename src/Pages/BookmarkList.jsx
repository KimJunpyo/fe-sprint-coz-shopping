import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import ProductCard from "../Components/ProductCard";
import ProductCategory from "../Components/ProductCategory";
import {CATEGORY_LIST} from "../Assets/ConstantValue";
import {shuffleArray} from "../Utils/ArrayUtil";
import {LocalStorage} from "../Utils/BrowserStorage";
import {getProducts} from "../Apis/DataSetup";
import {handleFilterProductList} from "../Utils/ArrayUtil";

function Bookmark() {
  const [productList, setProductList] = useState();
  const [bookmarkList, setBookmarkList] = useState();
  const [selectedBookmarkList, setSelectedBookmarkList] = useState();
  const [isClickCategory, setIsClickCategory] = useState(0);
  const bookmarkState = useSelector((state) => state.bookmarkReducer);

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
      setBookmarkList(
        productList.filter((product) => bookmarkState.includes(product.id))
      );
      setSelectedBookmarkList(
        productList.filter((product) => bookmarkState.includes(product.id))
      );
    }
  }, [productList]);

  useEffect(() => {
    if (productList) {
      const updatedBookmarkList = productList.filter((product) =>
        bookmarkState.includes(product.id)
      );
      setBookmarkList(updatedBookmarkList);
      setSelectedBookmarkList(updatedBookmarkList);
    }
  }, [productList, bookmarkState]);

  useEffect(() => {
    if (productList) {
      handleFilterProductList(
        setSelectedBookmarkList,
        isClickCategory,
        bookmarkList
      );
    }
  }, [isClickCategory, bookmarkList]);

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
        {selectedBookmarkList &&
          selectedBookmarkList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
    // <div>
    //   {bookmarkList &&
    //     bookmarkList.map((product) => (
    //       <ProductCard product={product} key={product.id} />
    //     ))}
    // </div>
  );
}

export default Bookmark;

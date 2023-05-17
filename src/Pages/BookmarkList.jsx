import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import ProductCard from "../Components/ProductCard";

function Bookmark() {
  const [bookmarkList, setBookmarkList] = useState();
  const productState = useSelector((state) => state.productReducer);
  const bookmarkState = useSelector((state) => state.bookmarkReducer);

  useEffect(() => {
    setBookmarkList(
      productState.filter((product) => bookmarkState.includes(product.id))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarkState]);

  return (
    <div>
      {bookmarkList &&
        bookmarkList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

export default Bookmark;

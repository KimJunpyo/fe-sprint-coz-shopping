import {useState, useEffect} from "react";
import {getProducts} from "../Apis/DataSetup";
import ProductCard from "../Components/ProductCard";

function Main() {
  const [productCard, setProductCard] = useState();

  useEffect(() => {
    getProducts()
      .then((res) => setProductCard(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {productCard &&
        productCard.map((e) => <ProductCard product={e} key={e.id} />)}
    </div>
  );
}

export default Main;

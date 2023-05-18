import AllImg from "../Assets/Images/all.png";
import ProductImg from "../Assets/Images/product.png";
import CategoryImg from "../Assets/Images/category.png";
import ExhibitionImg from "../Assets/Images/exhibition.png";
import BrandImg from "../Assets/Images/brand.png";

function ProductCategory({
  category,
  categoryImg,
  isClickCategory,
  setIsClickCategory,
  idx,
}) {
  const renderImage = (imgName) => {
    switch (imgName) {
      case "all.png":
        return AllImg;
      case "product.png":
        return ProductImg;
      case "category.png":
        return CategoryImg;
      case "exhibition.png":
        return ExhibitionImg;
      case "brand.png":
        return BrandImg;
      default:
        return AllImg;
    }
  };

  const handleClick = () => {
    setIsClickCategory(idx);
  };

  return (
    <div className="w-20 h-28 m-5 flex flex-col" onClick={handleClick}>
      <img src={renderImage(categoryImg)} alt="All" />
      <p
        className={`flex justify-center ${
          isClickCategory === idx &&
          "text-blue-purple font-bold underline decoration-4 underline-offset-4 decoration-black"
        }`}
      >
        {category}
      </p>
    </div>
  );
}

export default ProductCategory;

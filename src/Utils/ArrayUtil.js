import { CATEGORY_LIST } from "../Assets/ConstantValue";

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let randomNum = Math.floor(Math.random() * array.length);
      [array[i], array[randomNum]] = [array[randomNum], array[i]];
    }
    return array;
};

export const handleFilterProductList = (setState, categoryNumber, array) => {
  console.log(array);
  if (categoryNumber === 0) {
    setState(array);
    return;
  }
  setState(() => {
    return array.filter(
      (product) => product.type === CATEGORY_LIST[categoryNumber].categoryKey
    );
  });
};
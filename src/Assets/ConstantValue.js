export const PRODUCT_TYPE_LIST = {
    PRODUCT: "Product",
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    BRAND: "Brand",
}

export const LIST_TITLE = {
    PRODUCT: "상품 리스트",
    BOOKMARK: "북마크 리스트",
}

export const CATEGORY_LIST = [{ categoryKey:"All", title: "전체", imgUrl: "all.png" } ,
    { categoryKey: PRODUCT_TYPE_LIST.PRODUCT, title: "상품", imgUrl: "product.png" } ,
    { categoryKey: PRODUCT_TYPE_LIST.CATEGORY, title: "카테고리", imgUrl: "category.png" },
    { categoryKey: PRODUCT_TYPE_LIST.EXHIBITION, title: "기획전", imgUrl: "exhibition.png" },
    { categoryKey: PRODUCT_TYPE_LIST.BRAND, title: "브랜드", imgUrl: "brand.png" } ];
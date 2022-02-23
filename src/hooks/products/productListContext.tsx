import { createContext, useContext } from "react";
import { BaseProduct } from "../../types";

export interface ProductListCtx {
  productList : BaseProduct;
  loadingProducts: boolean;
}

export const productListCtxDefault: ProductListCtx = {
  productList: {} as BaseProduct,
  loadingProducts: false,
}

export const ProductListContext = createContext<ProductListCtx>(
  productListCtxDefault
);

export const useProductList = () => useContext(ProductListContext);
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { GetProductDTO, getProducts } from "../../api";
import { BaseProduct } from "../../types";
import { ProductListContext, ProductListCtx } from "./productListContext";

interface Props {
  consumer?: (context: ProductListCtx) => React.ReactNode;
}

export const ProductListProvider: FC<Props> = ({children, consumer}) => {

  const parameters: GetProductDTO = {
    article_name: "iphone",
  filter_search: true,
  markets_selected:  [],
  local_markets_suggestions: true,
  }

  const { data , isLoading: loadingProducts } = useQuery<any>(
    'productList',
    () => getProducts(parameters),
    {
      enabled: true,
    }
  );

  const [productList= {} as BaseProduct, setProductList] = useState<BaseProduct>();

  useEffect(() => {
    if (data) setProductList(data);
  }, [data]);

  const context: ProductListCtx = {
    productList,
    loadingProducts,
  };

  return (
    <ProductListContext.Provider value={context}>
      {!!consumer ? consumer(context) : children}
    </ProductListContext.Provider>
  );
}
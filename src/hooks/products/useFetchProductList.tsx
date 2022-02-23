import { useQuery } from "react-query";
import { GetProductDTO, getProducts } from "../../api";
import { BaseProduct } from "../../types";

export const useFetchProductList = () => {
  const parameters: GetProductDTO = {
    article_name: "iphone",
      filter_search: true,
      markets_selected: [],
      local_markets_suggestions: true,
  }
  
  const { data: productList = {} as BaseProduct, isLoading: loadingProducts } = useQuery<BaseProduct>(
    'productList',
    () => getProducts(parameters),
    {
      enabled: true,
    }
  );

  return { productList, loadingProducts }
}
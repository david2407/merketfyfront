import { apiCall, API_URL } from "../shared";
import { BaseProduct } from "../types";

const BASE_URL = `${API_URL}/markets`;

export interface APIResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

export interface GetProductDTO {
  article_name: string;
  filter_search: boolean;
  markets_selected: string[];
  local_markets_suggestions: boolean;
}

export const getProducts = async (search: GetProductDTO) => {
  const url = BASE_URL;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify({
      article_name: search.article_name,
      filter_search: search.filter_search,
      markets_selected: search.markets_selected,
      local_markets_suggestions: search.local_markets_suggestions,
    }),
  };
  const response = await fetch(url, requestOptions);

  // NOTE: The order of the parameters is important

  const json = await response.json();

  console.log(json);

  return json;
};

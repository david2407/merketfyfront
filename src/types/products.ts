export interface BaseProduct {
  article_name: string;
  article_markets: ArticleMarkets[];
}

export interface ArticleMarkets {
  market_name: string;
  article_name_market: string;
  market_article_url: string;
  article_image_url: string;
  article_price: string;
}

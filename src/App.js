import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import ProductList from "./products/ProductList";

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <ProductList />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;

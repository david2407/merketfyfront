import Image from "../nillkin-case-1.jpg";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link
          to={{
            pathname: "/product/" + props.index,
          }}
          href="!#"
          replace
        >
          <img
            className="card-img-top bg-dark cover"
            height="200"
            alt=""
            src={Image}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            {props.name}
          </h5>
          <p className="card-text text-center text-muted mb-0">
            {props.market}
          </p>
          <p className="card-text text-center text-muted mb-0">{props.price}</p>
          <div className="d-grid d-block">
            <a href={props.url} className="d-grid gap-2">
              <button className="btn btn-outline-dark ">Buy</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

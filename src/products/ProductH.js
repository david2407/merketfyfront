import Image from "../nillkin-case-1.jpg";
import { Link } from "react-router-dom";

function ProductH(props) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-4">
            <Link
              to={{
                pathname: "/product/" + props.index,
              }}
              href="!#"
              replace
            >
              <img
                className="rounded-start bg-dark cover w-100 h-100"
                alt=""
                src={Image}
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="card-body h-100">
              <div className="d-flex flex-column h-100">
                <h5 className="card-title text-dark text-truncate mb-1">
                  {props.name}
                </h5>
                <span className="card-text text-muted mb-2 flex-shrink-0">
                  {props.market}
                </span>
                <span className="card-text text-muted mb-2 flex-shrink-0">
                  {props.price}
                </span>
                <div className="mt-auto d-flex">
                  <a href={props.url} className="d-grid gap-2">
                    <button className="btn btn-outline-dark ">Buy</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductH;

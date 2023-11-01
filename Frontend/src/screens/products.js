import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";
import { Link } from "react-router-dom";
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const url = "http://localhost:5000/products";
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4">
            <Link to={`/product?_id=${product._id}`}>
            <div className="card mb-3">
            <img
                src={product.mediaUrl}
                className="card-img-top"
                alt={product.name}
                style={{ height: "500px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: &#8377;{product.price}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
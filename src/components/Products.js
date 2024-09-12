import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";
import "./Products.css";

const Products = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="products-wrapper">
      {filteredProducts.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h4 className="product-title">{product.title}</h4>
              <p className="product-price">₹{product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAdd(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;

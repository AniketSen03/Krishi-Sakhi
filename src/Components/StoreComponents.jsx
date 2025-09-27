import React, { useState } from "react";

// ---------------- CartButton ----------------
export const CartButton = ({ itemCount, onClick }) => (
  <button className="cart-button" onClick={onClick}>
    {/* Bootstrap cart icon */}
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
      className="bi bi-cart" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1h1.11l.401 1.607L3.89 9H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 18H4a.5.5 0 0 1-.491-.408L.01 1.607A.5.5 0 0 1 0 1.5zM5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
    {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    <span className="cart-text">Cart</span>
  </button>
);

// ---------------- CategoryFilter ----------------
export const CategoryFilter = ({ selectedCategory, onCategoryChange, categories }) => (
  <div className="category-filter">
    <h3 className="filter-title">Categories</h3>
    <div className="categories-list">
      <button
        className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}
        onClick={() => onCategoryChange("All")}
      >
        <span className="category-icon">📦</span>
        <span className="category-name">All Products</span>
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.name ? "active" : ""}`}
          onClick={() => onCategoryChange(category.name)}
        >
          <span className="category-icon">{category.icon}</span>
          <span className="category-name">{category.name}</span>
        </button>
      ))}
    </div>
  </div>
);

// ---------------- ProductCard ----------------
export const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button className="wishlist-btn">
          {/* Bootstrap heart */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
            className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 3.905C3.043 9.012 6.413 12 8 13.414c1.587-1.414 4.957-4.402 6.286-6.456.955-1.405.837-2.882.314-3.905C13.486.878 10.4.28 8.717 2.01z" />
          </svg>
        </button>
        {product.stock < 10 && <span className="low-stock">Low Stock</span>}
      </div>

      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          {/* Bootstrap star */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold"
            className="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443 4.39 10.58.173 6.765l5.053-.73L8 1.226l2.774 4.809 5.053.73-4.217 3.815.778 4.863L8 13.187l-4.389 2.256z" />
          </svg>
          <span>{product.rating}</span>
          <span className="reviews">(128 reviews)</span>
        </div>

        <div className="product-details">
          <div className="product-price">
            <span className="price">₹{product.price}</span>
            <span className="unit">/{product.unit}</span>
          </div>
          <div className="product-stock">
            {product.stock > 0 ? (
              <span className="in-stock">In Stock ({product.stock})</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>
        </div>

        <div className="product-actions">
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

// ---------------- SearchBar ----------------
export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-container">
        {/* Bootstrap search */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          fill="currentColor" className="bi bi-search search-icon"
          viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242 1.106a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
        </svg>
        <input
          type="text"
          placeholder="Search for products, stores, or categories..."
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

// ---------------- StoreCard ----------------
export const StoreCard = ({ store }) => (
  <div className="store-card">
    <div className="store-image">
      <img src={store.image} alt={store.name} />
    </div>
    <div className="store-info">
      <div className="store-header">
        <h3 className="store-name">{store.name}</h3>
        {store.verified && (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="green" className="bi bi-check-circle verified-icon"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.5-8.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zM7.5 11a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z" />
          </svg>
        )}
      </div>
      <div className="store-details">
        <div className="distance">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
            fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
          <span>{store.distance}</span>
        </div>
        <div className="rating">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
            fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443 4.39 10.58.173 6.765l5.053-.73L8 1.226l2.774 4.809 5.053.73-4.217 3.815.778 4.863L8 13.187l-4.389 2.256z" />
          </svg>
          <span>{store.rating}</span>
        </div>
      </div>
      <div className="store-products">
        {store.products.map((product, index) => (
          <span key={index} className="product-tag">{product}</span>
        ))}
      </div>
      <div className="store-delivery">
        <span>Delivery: {store.deliveryTime}</span>
        <span>Min order: ₹{store.minOrder}</span>
      </div>
      <button className="visit-store-btn">Visit Store</button>
    </div>
  </div>
);

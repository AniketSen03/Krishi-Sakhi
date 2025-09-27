import React, { useState } from "react";
import { products } from "./products";
import { categories } from "./categories";
import "../Styling/Krishistore.css";

const KrishiStore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-listing-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Agricultural Products</h1>
          <button className="cart-button">Cart ({cartItems.length})</button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <div className="listing-content">
          {/* Categories Sidebar */}
          <aside className="sidebar">
            <div className="category-filter">
              <button
                className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${selectedCategory === cat.name ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Products Grid */}
          <main className="products-main">
            <div className="products-header">
              <h2>
                {selectedCategory} Products ({filteredProducts.length})
              </h2>
              <select className="sort-select">
                <option>Sort by: Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            <div className="products-container">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">₹{product.price}</p>
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>

              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default KrishiStore; // ✅ default export

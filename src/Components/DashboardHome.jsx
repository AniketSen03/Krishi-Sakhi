// src/components/DashboardHome.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "./products";
import { categories } from "./categories";
import { storesData } from "./stores";
import "../Styling/Dashboardhome.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DashboardHome = () => {
  const [stores] = useState(storesData);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStores =
    filter === "verified" ? stores.filter((s) => s.verified) : stores;

  const featuredProducts = products.slice(0, 6);

  const handleSearch = (term) => setSearchTerm(term);

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

useEffect(() => {
  // Hero content slides from top
  gsap.from(".hero-content", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 90%",
    },
  });

  // Featured products slide in from bottom
  gsap.from(".product-card", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".featured-products",
      start: "top 85%",
    },
  });

  // Section headers fade in from top
  gsap.from(".section-title", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 90%",
    },
  });

  // Stores slide in from bottom
  gsap.from(".store-card", {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stores-section",
      start: "top 85%",
    },
  });
}, []);


  return (
    <div className="home-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Krishi Sakhi - Your Farming Partner</h1>
            <p className="hero-subtitle">
              Get all agricultural products delivered to your farm
            </p>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-bar"
            />
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link key={category.id} to="/products" className="category-card">
                <div className="category-icon">{category.icon}</div>
                <span className="category-name">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="featured-products">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <Link to="/products" className="view-all-link">
              View All Products
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>₹{product.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Stores Section */}
        <section className="stores-section">
          <div className="page-header">
            <h2 className="section-title">Agrishops nearby</h2>
            <div className="filter-tabs">
              <button
                className={`filter-tab ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All Stores
              </button>
              <button
                className={`filter-tab ${filter === "verified" ? "active" : ""}`}
                onClick={() => setFilter("verified")}
              >
                Verified Only
              </button>
            </div>
          </div>
          <div className="stores-grid">
            {filteredStores.map((store) => (
              <div key={store.id} className="store-card">
                <h4>{store.name}</h4>
                <p>{store.location}</p>
                {store.verified && <span>✅ Verified</span>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardHome;

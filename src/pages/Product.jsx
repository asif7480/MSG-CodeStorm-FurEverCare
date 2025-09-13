import React, { useState } from 'react'
import Layout from '../components/Layout'
import products from "../data/products.json"
import './Product.css';
import Hero from '../components/Hero';

function Product() {
  const [search, setSearch] = useState("");


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        {/* <section id="home" className="hero-section">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Welcome to PetCare</h1>
            <p className="lead">Your one-stop destination for all your pet's needs</p>
            <a href="#products" className="btn btn-primary btn-lg mt-3">Explore Products</a>
          </div>
        </section> */}

        <Hero title={`Pet Products`} btnText={``} />

        {/* Products Section */}
        <section id="products" className="py-5">
          <div className="container">

            {/* Search Box */}
            <div className="row mb-4">
              <div className="col-md-6 mx-auto">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search products..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="row" id="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={index}>
                    <div className="card shadow-lg border-0 rounded-4 h-100">
                      <img src={product.image} className="card-img-top rounded-top-4" alt={product.name} />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text text-muted small">{product.description}</p>
                        <p className="fw-bold mb-1">{product.price}</p>
                        <span className="badge mb-3">{product.category}</span>
                        <div className="mt-auto d-grid">
                          <a href="#" className="btn btn-success rounded-pill">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">No products found.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Product

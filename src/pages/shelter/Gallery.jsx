import React, { useState } from 'react';
import Layout from '../../components/Layout';
import gallery from "../../data/shelter/gallery.json";
import "./Gallery.css";

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Filter pets by type and search term (name)
  const filteredPets = gallery.filter(pet => {
    const matchesType = filter === 'all' || pet.type === filter;
    const matchesSearch = pet.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleFilterClick = (type) => {
    setFilter(type);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <section id="gallery" className="py-5">
        <div className="container">
          <h2 className="section-title">Adoptable Pets</h2>

          {/* Search Input */}
          <div className="search-container mb-4 text-center">
            <input
              type="text"
              placeholder="Search pets by name..."
              value={search}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          {/* Filter Buttons */}
          <div className="text-center mb-4">
            <button
              style={{ marginRight: "15px", border: "none", backgroundColor: "#ff6b6b", color: "white", fontWeight: 600, padding: "0.75rem 2rem", borderRadius: "50px", transition: "background-color 0.3s ease, color 0.3s ease" }}
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Pets
            </button>
            <button
              style={{ marginRight: "15px", border: "none", backgroundColor: "#ff6b6b", color: "white", fontWeight: 600, padding: "0.75rem 2rem", borderRadius: "50px", transition: "background-color 0.3s ease, color 0.3s ease" }}
              className={`filter-btn ${filter === 'dog' ? 'active' : ''}`}
              onClick={() => handleFilterClick('dog')}
            >
              Dogs
            </button>
            <button
              style={{ marginRight: "15px", border: "none", backgroundColor: "#ff6b6b", color: "white", fontWeight: 600, padding: "0.75rem 2rem", borderRadius: "50px", transition: "background-color 0.3s ease, color 0.3s ease" }}
              className={`filter-btn ${filter === 'cat' ? 'active' : ''}`}
              onClick={() => handleFilterClick('cat')}
            >
              Cats
            </button>
            <button
              style={{ marginRight: "15px", border: "none", backgroundColor: "#ff6b6b", color: "white", fontWeight: 600, padding: "0.75rem 2rem", borderRadius: "50px", transition: "background-color 0.3s ease, color 0.3s ease" }}
              className={`filter-btn ${filter === 'rabbit' ? 'active' : ''}`}
              onClick={() => handleFilterClick('rabbit')}
            >
              Rabbits
            </button>
          </div>

          {/* Pets Gallery */}
          <div className="row" id="pet-gallery">
            <div className="pet-cards-container">
              {filteredPets.length === 0 ? (
                <p>No pets found.</p>
              ) : (
                filteredPets.map((pet, i) => (
                  <div className="pet-card" key={pet.id || i}>
                    <img src={pet.image} alt={pet.name} className="pet-image" />
                    <div className="pet-content">
                      <h3 className="pet-name">{pet.name}</h3>
                      <p className="pet-breed-age">{pet.breed} • {pet.age}</p>
                      <p className="pet-description">{pet.description}</p>
                      <span className={`pet-badge pet-badge-${pet.type}`}>
                        {pet.type}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Gallery;

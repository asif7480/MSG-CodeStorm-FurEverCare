import React, { useState } from 'react';
import Layout from '../../components/Layout';
import successStories from '../../data/shelter/successStories.json';
// import './Input.css';

function Stories() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter stories based on search input (case-insensitive)
  const filteredStories = successStories.filter(({ title, author }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section id="success-stories" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>

          {/* Search Field */}
          <input
            type="text"
            placeholder="Search stories by title or author..."
            className="custom-search-input mx-auto d-block"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="row">
            {filteredStories.length > 0 ? (
              filteredStories.map(({ id, image, title, adopted, story, author }) => (
                <div className="col-lg-6" key={id}>
                  <div className="success-story">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={image}
                        alt={title}
                        className="rounded-circle me-3"
                        style={{ width: 80, height: 80, objectFit: 'cover' }}
                      />
                      <div>
                        <h5 className="mb-0" style={{ color: "#ff6b6b"}}>{title}</h5>
                        <p className="text-muted mb-0">Adopted: {adopted}</p>
                      </div>
                    </div>
                    <p className="mb-0">"{story}" - {author}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No stories match your search.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Stories;

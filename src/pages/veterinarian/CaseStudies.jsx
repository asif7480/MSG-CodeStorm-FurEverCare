import React, { useState } from 'react';
import './CaseStudies.css'; // Optional: external CSS
import Layout from '../../components/Layout';
import caseStudies from "../../data/caseStudies.json";

const CaseStudies = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter case studies based on search input
    const filteredStudies = caseStudies.filter((study) => {
        const term = searchTerm.toLowerCase();
        return (
            study.title.toLowerCase().includes(term) ||
            study.vet.toLowerCase().includes(term) ||
            study.description.toLowerCase().includes(term)
        );
    });

    return (
        <Layout>
            <div className="container py-5">
                <h2 className="section-title">Pet Recovery Case Studies</h2>

                {/* Search Box */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by pet name, vet, or condition..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Results */}
                <div className="row">
                    {filteredStudies.length > 0 ? (
                        filteredStudies.map((study) => (
                            <div className="col-md-4 mb-4" key={study.id}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={study.image}
                                        className="card-img-top"
                                        alt={study.title}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{study.title}</h5>
                                        <p className="card-text text-muted mb-2">
                                            <strong>Veterinarian:</strong> {study.vet}
                                        </p>
                                        <p className="card-text">{study.description}</p>
                                        <p className="mt-auto text-secondary">
                                            <small><strong>Date:</strong> {study.date}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p className="text-muted text-center">No case studies found.</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default CaseStudies;

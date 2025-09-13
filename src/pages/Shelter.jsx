import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

function Shelter() {
  return (
    <Layout>
      <div>
        {/* Hero Section */}
        {/* <section className="hero-section">
          <div className="container">
            <h1 className="display-4 fw-bold">Find Your New Best Friend</h1>
            <p className="lead">We rescue, rehabilitate and rehome animals in need. Browse our pets waiting for their forever homes.</p>
            <Link to={`/shelter/gallery`} className="btn btn-light btn-lg mt-3">View Adoptable Pets</Link>
          </div>
        </section> */}
        <div style={{ paddingTop: "9%", height: '600px', background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" }}>
          <Hero
            title={`Find Your New Best Friend`}
            description={`We rescue, rehabilitate and rehome animals in need. Browse our pets waiting for their forever homes.`}
            btnText={`View Adoptable Pets`}
            btnLink={`/shelter/gallery`}
          />
        </div>




      </div>

    </Layout>
  )
}

export default Shelter
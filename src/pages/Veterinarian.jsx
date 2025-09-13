import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import vets from "../data/vets/vets.json"

function Veterinarian() {
  return (
    <Layout>
      <div>
        <Hero title={`Claws Animal Hospital`} description={`Your Pet’s Health, Our Priority`} btnLink={``} />
        {/* <header className="hero">
          <h1>Paws &amp; Claws Animal Hospital</h1>
          <p>Your Pet’s Health, Our Priority</p>
        </header> */}
        {/* Hero Section */}
        <section className='container text-center my-5 py-5'>
          <h2 style={{ color: `#ff6b6b`, fontWeight: 600 }} className='mb-3'>Meet Our Experienced Veterinarians</h2>
          <p>Find the right specialist for your pet’s needs. Select a veterinarian below to view detailed profile, appointment availability, and case studies.</p>
        </section>

        {/* <Hero title={`Meet Our Experienced Veterinarians`} description={`Find the right specialist for your pet’s needs. Select a veterinarian below to view detailed profile, appointment availability, and case studies.`} btnLink={``} /> */}
        {/* Veterinarians List */}
        <section className="vet-list">
          <div className="container">
            <div className="row">
              {vets.map(vet => (
                <div key={vet.id} className="col-md-4 mb-4">
                  <div className="vet-card card h-100">
                    <img src={vet.img} alt={vet.name} className="card-img-top" />
                    <div className="card-body">
                      <h2 className="card-title h5">{vet.name}</h2>
                      <p className="specialization">{vet.specialization}</p>
                      <div className="contact-info mb-3">
                        <p><b>Phone:</b> {vet.phone}</p>
                        <p><b>Email:</b> {vet.email}</p>
                      </div>
                      <a href={vet.profileLink} className="btn btn-primary">View Profile</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </Layout>
  )
}

export default Veterinarian
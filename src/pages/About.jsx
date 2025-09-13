import React from 'react'
import Layout from '../components/Layout'
import './About.css';
import Hero from '../components/Hero';

function About() {
  return (
    <Layout>
        <Hero title={`About Us`} description={`At PetCare, we're passionate about providing the best care for your furry family members.`} btnLink={``} />
        {/* About Us Section */}
        <section id="about" className="py-5">
        <div className="row">
            <div className="col-lg-8 mx-auto">
            <div className="my-5">
                <h3>Our Mission</h3>
                <p>Our mission is to be the most trusted resource for pet owners, offering comprehensive information, quality products, and access to professional veterinary care.</p>
            </div>
            <div className="my-5">
                <h3>Our Team</h3>
                <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                    <div className="card-body text-center">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" className="rounded-circle mb-3" alt="Team Member" width={120} />
                        <h5>Dr. Sarah Johnson</h5>
                        <p className="text-muted">Chief Veterinarian</p>
                        <p>With over 15 years of experience, Dr. Johnson leads our team of veterinary experts.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                    <div className="card-body text-center">
                        <img src="https://avatars.mds.yandex.net/i?id=22c4676f5eeb85081b72f4e0c42a116639d2aeda-8770658-images-thumbs&n=13" className="rounded-circle mb-3" alt="Team Member" width={120} />
                        <h5>Michael Chen</h5>
                        <p className="text-muted">Pet Nutritionist</p>
                        <p>Michael specializes in developing balanced diets for pets with specific health needs.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="my-5">
                <h3>Our Story</h3>
                <p>Founded in 2010, PetCare started as a small local pet store and has grown into a comprehensive online resource for pet owners nationwide. We've helped thousands of pets live healthier, happier lives through our products and educational resources.</p>
            </div>
            </div>
        </div>
        </section>



    </Layout>
  )
}

export default About
import React from 'react'
import Layout from '../../components/Layout'
import "./ShelterContact.css"
import "./Input.css";

function ShelterContact() {
    return (
        <Layout>
            <h2 className="section-title mt-5">Contact Us</h2>
            <section className="py-1 container">
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" className="custom-search-input" id="name" placeholder="John Doe" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="custom-search-input" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Example textarea</label>
                        <textarea className="custom-search-input" id="message" rows={5} defaultValue={""} />
                    </div>


                    <div className="mb-3">
                       <input className='btn btn-primary' type="submit" value={`Send message`} />
                    </div>

                </div>
            </section>



            <section id="contact" className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-4">
                            <div className="contact-info h-100">
                                <h4 className="mb-4">Happy Paws Animal Shelter</h4>
                                <p><i className="fas fa-map-marker-alt" /> 1234 Animal Lane, Petville, CA 90210</p>
                                <p><i className="fas fa-phone" /> (555) 123-4567</p>
                                <p><i className="fas fa-envelope" /> info@happypawsshelter.org</p>
                                <p><i className="fas fa-clock" /> Open Hours: Monday-Saturday, 10AM-6PM</p>
                                <h5 className="mt-4">Adoption Process Hours</h5>
                                <p>Monday-Friday: 12PM-5PM<br />Saturday: 10AM-4PM</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106100.16029785515!2d-118.38889539999999!3d34.0172496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8c0e1dd15b7%3A0xef6e2fbf7bebe5e!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1685480006681!5m2!1sen!2s" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default ShelterContact
import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

function Emergency() {
  return (
    <Layout>
        <Hero title={`Emergency & Vet Help`} btnText={``}/>
        {/* Emergency Help Section */}
        <section id="emergency" className="py-5">
        {/* <h2 className="section-title">Emergency &amp; Vet Help</h2> */}
        <div className="container d-flex justify-content-center">
            <div className="row mb-5">
                <div className="col-md-6">
                <div className="card h-100">
                    <div className="card-body">
                    <h3 className="card-title">Emergency Contacts</h3>
                    <div className="table-responsive">
                        <table className="table table-striped">
                        <thead>
                            <tr>
                            <th>Service</th>
                            <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Pet Poison Helpline</td>
                            <td>(855) 764-7661</td>
                            </tr>
                            <tr>
                            <td>ASPCA Animal Poison Control</td>
                            <td>(888) 426-4435</td>
                            </tr>
                            <tr>
                            <td>Local Emergency Vet</td>
                            <td>(555) 123-4567</td>
                            </tr>
                            <tr>
                            <td>24/7 Veterinary Consultation</td>
                            <td>(555) 987-6543</td>
                            </tr>
                            <tr>
                            <td>Animal Emergency Center</td>
                            <td>(555) 456-7890</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card h-100">
                    <div className="card-body">
                    <h3 className="card-title">Find a Veterinarian Near You</h3>
                    <div className="map-container">
                        <i className="fas fa-map-marker-alt fa-3x" style={{ color: "#FF6F61", padding: "10px 0"}} />
                        {/* <p className="mt-3">Google Maps integration would appear here</p> */}
                          <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.7222495067856!2d67.06440627597727!3d24.80635647798162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9bd69d96b5%3A0xd0d62db024f15f1b!2sAlpha%20Pets%20DHA%20Branch!5e0!3m2!1sen!2s!4v1694639465484!5m2!1sen!2s"
                      width="100%"
                      height="200"
                      style={{ border: 0, borderRadius: '0.75rem', width: '100%' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    </div>
                    <div className="mt-4">
                        <h5>Our Location</h5>
                        <p><i className="fas fa-map-marker-alt me-2" /> 123 Pet Street, Pet City, PC 12345</p>
                        <p><i className="fas fa-phone me-2" /> (123) 456-7890</p>
                        <p><i className="fas fa-envelope me-2" /> emergency@petcare.com</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container d-flex justify-content-center">
 <div className="card">
            <div className="card-body">
            <h3 className="card-title">Emergency Preparedness</h3>
            <div className="row">
                <div className="col-md-6">
                <h5>First Aid Kit Essentials</h5>
                <ul>
                    <li>Gauze pads and rolls</li>
                    <li>Adhesive tape</li>
                    <li>Antiseptic wipes</li>
                    <li>Hydrogen peroxide (3%)</li>
                    <li>Digital thermometer</li>
                    <li>Tweezers and scissors</li>
                </ul>
                </div>
                <div className="col-md-6">
                <h5>Emergency Procedures</h5>
                <ul>
                    <li>Keep emergency numbers handy</li>
                    <li>Know the location of the nearest 24-hour vet</li>
                    <li>Learn pet CPR</li>
                    <li>Have a pet emergency evacuation plan</li>
                    <li>Keep medical records accessible</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
       
        </section>

    </Layout>
  )
}

export default Emergency
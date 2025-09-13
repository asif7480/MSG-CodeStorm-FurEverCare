import React from 'react'
import Layout from '../components/Layout'
import './Petcare.css';
import Hero from '../components/Hero';
import groomingVideos from "../data/groomingVideos.json"
import healthTips from "../data/healthTips.json"
import TrainingTips from '../components/owner/TraningTips';
import HealthTips from '../components/owner/HealthTips';

function Petcare() {
  return (
    <Layout>
      {/* Main Content */}
      <Hero title={`Pet Care Resources`} btnText={`Explore`} btnLink={`/products`} />
      <div className="container">
        {/* Pet Care Section */}
        <section id="pet-care" className="pet-care-section">
          {/* Pet Profile */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="card pet-care-card">
                <div className="card-body">
                  <h3><i className="fas fa-paw me-2" />Pet Profile</h3>
                  <div className="row mt-4">
                    <div className="col-sm-6">
                      <p><strong>Name:</strong> Max</p>
                      <p><strong>Species:</strong> Dog</p>
                      <p><strong>Breed:</strong> Golden Retriever</p>
                      <p><strong>Age:</strong> 3 years</p>
                      <p><strong>Weight:</strong> 65 lbs</p>
                    </div>
                    <div className="col-sm-6">
                      <p><strong>Vaccinations:</strong> Rabies, DHPP, Bordetella</p>
                      <p><strong>Last Checkup:</strong> June 15, 2023</p>
                      <p><strong>Next Appointment:</strong> December 15, 2023</p>
                      <p><strong>Microchip ID:</strong> 1234567890</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5>Health Status</h5>
                    <p>Overall Health: </p><div className="progress"><div className="progress-bar bg-success" style={{ width: '90%' }} /></div><p />
                    <p>Weight Management: </p><div className="progress"><div className="progress-bar bg-info" style={{ width: '85%' }} /></div><p />
                    <p>Dental Health: </p><div className="progress"><div className="progress-bar bg-warning" style={{ width: '75%' }} /></div><p />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card pet-care-card">
                <div className="card-body">
                  <h3><i className="fas fa-bone me-2" />Feeding Guide</h3>
                  <ul className="nav nav-pills mb-3" id="feedingTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="puppies-tab" data-bs-toggle="pill" data-bs-target="#puppies" type="button" role="tab">Puppies</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="adults-tab" data-bs-toggle="pill" data-bs-target="#adults" type="button" role="tab">Adult Dogs</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="cats-tab" data-bs-toggle="pill" data-bs-target="#cats" type="button" role="tab">Cats</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="feedingTabContent">
                    <div className="tab-pane fade show active" id="puppies" role="tabpanel">
                      <h5>Puppy Feeding Guidelines</h5>
                      <table className="feeding-table">
                        <tbody><tr>
                          <th>Age</th>
                          <th>Meals per Day</th>
                          <th>Amount per Meal</th>
                        </tr>
                          <tr>
                            <td>8-12 weeks</td>
                            <td>4</td>
                            <td>1/2 - 1 cup</td>
                          </tr>
                          <tr>
                            <td>3-6 months</td>
                            <td>3</td>
                            <td>1 - 1.5 cups</td>
                          </tr>
                          <tr>
                            <td>6-12 months</td>
                            <td>2</td>
                            <td>1.5 - 2 cups</td>
                          </tr>
                        </tbody></table>
                      <p className="mt-3">Puppies need high-quality puppy food with extra nutrients for growth. Always provide fresh water.</p>
                    </div>
                    <div className="tab-pane fade" id="adults" role="tabpanel">
                      <h5>Adult Dog Feeding Guidelines</h5>
                      <table className="feeding-table">
                        <tbody><tr>
                          <th>Weight</th>
                          <th>Amount per Day</th>
                          <th>Calories</th>
                        </tr>
                          <tr>
                            <td>20-30 lbs</td>
                            <td>1.5 - 2 cups</td>
                            <td>550-750 kcal</td>
                          </tr>
                          <tr>
                            <td>30-50 lbs</td>
                            <td>2 - 2.5 cups</td>
                            <td>750-1100 kcal</td>
                          </tr>
                          <tr>
                            <td>50-70 lbs</td>
                            <td>2.5 - 3.5 cups</td>
                            <td>1100-1550 kcal</td>
                          </tr>
                        </tbody></table>
                      <p className="mt-3">Adult dogs typically need 2 meals per day. Adjust portions based on activity level and weight.</p>
                    </div>
                    <div className="tab-pane fade" id="cats" role="tabpanel">
                      <h5>Cat Feeding Guidelines</h5>
                      <table className="feeding-table">
                        <tbody><tr>
                          <th>Weight</th>
                          <th>Dry Food</th>
                          <th>Wet Food</th>
                        </tr>
                          <tr>
                            <td>5-8 lbs</td>
                            <td>1/4 - 1/2 cup</td>
                            <td>3-5 oz</td>
                          </tr>
                          <tr>
                            <td>8-12 lbs</td>
                            <td>1/2 - 3/4 cup</td>
                            <td>5-7 oz</td>
                          </tr>
                          <tr>
                            <td>12-15 lbs</td>
                            <td>3/4 - 1 cup</td>
                            <td>7-9 oz</td>
                          </tr>
                        </tbody></table>
                      <p className="mt-3">Cats prefer multiple small meals throughout the day. Provide both wet and dry food for balanced nutrition.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grooming Videos */}

          <div className="row mb-5">
            <div className="col-12">
              <h3><i className="fas fa-cut me-2" />Grooming Videos</h3>
            </div>

            {groomingVideos.map(video => (
              <div key={video.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="video-container">
                    <iframe
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{video.heading}</h5>
                    <p className="card-text">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Health Tips */}
          <HealthTips />

          <TrainingTips />
          
        </section>
      </div>

    </Layout>
  )
}

export default Petcare
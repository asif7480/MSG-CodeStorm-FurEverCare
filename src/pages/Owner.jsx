import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import './Owner.css';
import Hero from '../components/Hero';

function Owner() {
  return (
<Layout>
  {/* Hero Section */}
  {/* <section className="hero">
    <div className="container">
      <h1 className="display-4 fw-bold">Your Pet's Health &amp; Happiness is Our Priority</h1>
      <p className="lead">We provide everything you need to keep your furry friends healthy and happy</p>
      <Link to={`/products`} className="btn btn-light btn-lg mt-3">Explore Products</Link>
    </div>
  </section> */}
  <Hero title="Your Pet's Health & Happiness is Our Priority" description="We provide everything you need to keep your furry friends healthy and happy" btnText="Explore Products" btnLink="/products" />
  {/* Pet Care Sections */}
  <div className="container my-5">
    {/* Pet Profile */}
    <div id="pet-profile" className="row my-5">
      <div className="col-md-6">
        <h3>Pet Profile</h3>
        <div className="card">
          <div className="card-body">
            <div className="text-center mb-4">
              <img src="https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="Golden Retriever" className="rounded-circle" width={150} height={150} />
              <h4 className="mt-3">Buddy</h4>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p><strong>Species:</strong> Dog</p>
                <p><strong>Breed:</strong> Golden Retriever</p>
                <p><strong>Age:</strong> 2 years</p>
              </div>
              <div className="col-sm-6">
                <p><strong>Last Vaccination:</strong> 03/15/2023</p>
                <p><strong>Next Vaccination:</strong> 09/15/2023</p>
                <p><strong>Vet:</strong> Dr. Sarah Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h3>Feeding Guide</h3>
        <div className="card">
          <div className="card-body">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-puppies-tab" data-bs-toggle="pill" data-bs-target="#pills-puppies">Puppies</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-adults-tab" data-bs-toggle="pill" data-bs-target="#pills-adults">Adult Dogs</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-cats-tab" data-bs-toggle="pill" data-bs-target="#pills-cats">Cats</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-puppies">
                <h5>Puppy Feeding Chart</h5>
                <p>Puppies need specially formulated food for proper growth and development.</p>
                <ul>
                  <li>2-3 months: 4 meals per day</li>
                  <li>4-6 months: 3 meals per day</li>
                  <li>7-12 months: 2 meals per day</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="pills-adults">
                <h5>Adult Dog Feeding Chart</h5>
                <p>Adult dogs typically need 2 meals per day. Adjust portions based on activity level.</p>
                <ul>
                  <li>Small breeds (1-10kg): ½ - 1¼ cups per day</li>
                  <li>Medium breeds (10-25kg): 1¼ - 2¼ cups per day</li>
                  <li>Large breeds (25-45kg): 2¼ - 3¼ cups per day</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="pills-cats">
                <h5>Cat Feeding Chart</h5>
                <p>Cats are obligate carnivores and need high-protein diets.</p>
                <ul>
                  <li>Kittens: 3-4 meals per day</li>
                  <li>Adult cats: 2 meals per day</li>
                  <li>Senior cats: 2-3 smaller meals per day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Grooming Videos */}
    <div id="grooming" className="row my-5">
      <div className="col-12">
        <h3>Grooming Videos</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/OIjGpSdxhnE" allowFullScreen />
                </div>
                <h5 className="mt-3">Brushing Techniques</h5>
                <p>Learn how to properly brush your pet's coat to prevent matting and reduce shedding.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/OIjGpSdxhnE" allowFullScreen />
                </div>
                <h5 className="mt-3">Bathing Your Pet</h5>
                <p>Step-by-step guide to bathing your pet without causing stress or discomfort.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/HXGHNLbA0hQ" allowFullScreen />
                </div>
                <h5 className="mt-3">Nail Trimming</h5>
                <p>Safe techniques for trimming your pet's nails without causing pain or injury.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Health Tips */}
    <div id="health-tips" className="row my-5">
      <div className="col-12">
        <h3>Health Tips</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>Oral Care</h5>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe src="https://avatars.mds.yandex.net/i?id=20534cbb7c9d0732852564957dfbb56a138dbf41-5859023-images-thumbs&n=13" allowFullScreen />
                </div>
                <p>Regular dental care is essential for your pet's overall health. Brush their teeth regularly and provide dental chews.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5>Weight Management</h5>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe src="https://www.youtube.com/embed/6N9hUE5tXMo" allowFullScreen />
                </div>
                <p>Maintain a healthy weight for your pet through proper diet and regular exercise to prevent obesity-related health issues.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Training Tips */}
    <div id="training" className="row my-5">
      <div className="col-12">
        <h3>Training Tips</h3>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5>Basic Commands</h5>
                <audio controls className="w-100 mb-3">
                  <source src="#" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p>Teach your dog basic commands like sit, stay, and come using positive reinforcement techniques.</p>
              </div>
              <div className="col-md-6">
                <h5>Potty Training</h5>
                <audio controls className="w-100 mb-3">
                  <source src="#" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p>Effective strategies for potty training your puppy or adult dog with consistency and patience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>

  )
}

export default Owner
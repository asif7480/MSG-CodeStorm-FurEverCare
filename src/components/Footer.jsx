import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const  category = localStorage.getItem("category");
  return (
    <>
        {/* Footer */}
        <footer>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <h5><i className="fas fa-paw" /> PetCare</h5>
                <p>Your one-stop solution for all pet care needs. We provide quality products, expert advice, and reliable services for pet owners.</p>
            </div>
            <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                <li><Link to={`/${category}`}>Home</Link></li>
                <li><Link to={`/about`}>About Us</Link></li>
                <li><Link to={`/products`}>Products</Link></li>
                <li><Link to={`/emergency`}>Emergency Help</Link></li>
                <li><Link to={`/contact`}>Contact Us</Link></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h5>Connect With Us</h5>
                <div className="social-icons">
                <a href="#"><i className="fab fa-facebook" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
                <a href="#"><i className="fab fa-pinterest" /></a>
                </div>
                <div className="mt-3">
                <p>Subscribe to our newsletter for updates:</p>
                <div className="input-group">
                    <input type="email" className="form-control" placeholder="Your email" />
                    <button className="btn">Subscribe</button>
                </div>
                </div>
            </div>
            </div>
            <hr />
            <div className="text-center">
            <p>© 2023 PetCare. All rights reserved.</p>
            </div>
        </div>
        </footer>

    </>
  )
}

export default Footer
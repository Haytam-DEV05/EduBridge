import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Busness Marketing</li>
              <li>User Analyst</li>
              <li>Live chat</li>
              <li>unlimited Support</li>
            </ul>
          </div>
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>ios & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>Api</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} | All Right reserved made by
            <span className="text-primary"> haitam Nefal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

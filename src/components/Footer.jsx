import React from 'react'
import './css/Footer.css'

function Footer() {
  return (
    <div>
  <div id="animation-footer">
  <footer className="footer text-light">
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row d-flex justify-content-center align-items-center py-5">
        <div className="col-md-6 mt-4">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum libero nec risus porttitor, eget aliquet lectus faucibus.
          </p>
          <p className="pe-3 d-none d-md-block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            eius perferendis sapiente eligendi velit laboriosam?{" "}
          </p>
        </div>
        <div className="col-md-3 mt-4 d-none d-md-block">
          <h4 className="">Quick Links</h4>
          <ul className="list-unstyled">
            <li>
              <a
                href="#home-scroll"
                className="text-decoration-none text-light pe-auto"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#team-profile-wrapper"
                className="text-decoration-none text-light"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="services-scroll"
                className="text-decoration-none text-light"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-light">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mt-4">
          <h4>Contact Us</h4>
          <address>
            123 Street, City
            <br />
            State, Country
            <br />
            Phone: +123456789
            <br />
            Email: cafepress98746@gmail.com
          </address>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Footer
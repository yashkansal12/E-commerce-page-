function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>
            <i className="fa-solid fa-store"></i>
            MyStore
          </h2>
          <p>
            Your one-stop shop for quality products
            at the best prices.
          </p>

        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <i className="fa-solid fa-phone"></i>
            +91 9876543210
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i>
            support@mystore.com
          </p>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            Delhi, India
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 MyStore. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to MyStore</h1>

        <p>
          Find the best products at the best prices.
        </p>

        <Link to="/shop">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
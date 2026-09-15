import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="loading">Loading products...</h2>;
  }

  return (
    <section className="shop">
      <h1>Shop</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>

              <p className="price">
                ${product.price}
              </p>

              <button className="cart-btn">
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
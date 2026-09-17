import { useEffect, useState } from "react";

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

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

  const filteredProducts = products
    .filter((product) => {
      return product.title
        .toLowerCase()
        .includes(search.toLowerCase());
    })
    .filter((product) => {
      if (category === "all") {
        return true;
      }

      return product.category === category;
    })
    .sort((a, b) => {
      if (sort === "az") {
        return a.title.localeCompare(b.title);
      }
      if (sort === "price-low") {
        return a.price - b.price;
      }
      if (sort === "price-high") {
        return b.price - a.price;
      }

      return 0;
    });

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSort("default");
  };

  if (loading) {
    return <h2 className="loading">Loading products...</h2>;
  }

  return (
    <section className="shop">
      <h1>Our Products</h1>
      <div className="shop-controls">
        <div className="shop-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="men's clothing">
            Men's Clothing
          </option>

          <option value="women's clothing">
            Women's Clothing
          </option>

          <option value="jewelery">
            Jewelry
          </option>

          <option value="electronics">
            Electronics
          </option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">
            Sort By
          </option>

          <option value="az">
            Alphabetical (A-Z)
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>
        </select>

        <button
          className="clear-btn"
          onClick={clearFilters}>
          Clear
        </button>
      </div>

      <p className="product-count">
        Showing {filteredProducts.length} products
      </p>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <i className="fa-solid fa-box-open"></i>
          <h2>No products found</h2>
          <p>
            Try another search or category.
          </p>
        </div>
      ) : (

        <div className="products">
          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="category">
                  {product.category}
                </p>
                <p className="price">
                  ${product.price}
                </p>

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product)}>
                  <i className="fa-solid fa-cart-plus"></i>
                  Add to Cart
                </button>
              </div>
            </div>

          ))}
        </div>
      )}
    </section>
  );
}

export default Shop;
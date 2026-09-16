function Cart({
  cart, increaseQuantity, decreaseQuantity, removeFromCart
}) {
  if (cart.length === 0) {
    return (
      <section className="cart">
        <h1>Shopping Cart</h1>

        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some products from the shop.</p>

        </div>
      </section>
    );
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h1>Shopping cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="car-item"
              key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>

                <div className="quantity">
                  <button onClick={() =>
                    decreaseQuantity(item.id)
                  }>
                    -
                  </button>
                  <span>
                    {item.quantity}
                  </span>

                  <button onClick={() =>
                    increaseQuantity(item.id)
                  }>
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }>
                  <i className="fa-solid fa-trash"></i>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="checkout-btn">
            <i className="fa-solid fa-credit-card"></i>
            Proceed to Checkout
          </button>

        </div>
      </div>
    </section>
  );
}

export default Cart;
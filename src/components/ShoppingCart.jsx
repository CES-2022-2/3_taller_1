import CartItem from "./CartItem";

const ShoppingCart = ({ CartItems, addToCart }) => {
  return (
    <div className="productCatalog">
      <h1>Shopping Cart</h1>
      <hr />
      <ul className="productList">
        {CartItems.map((item) => (
          <CartItem key={item.id} product={item} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;

const CartButton = ({ prod, addToCart }) => {
  return (
    <button className="cartButton" onClick={() => addToCart(prod)}>
      Add to cart
    </button>
  );
};

export default CartButton;

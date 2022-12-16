import ProductImage from "./ProductImage";

const CartItem = ({ product, addToCart }) => {
  return (
    <li className="list">
      <div className="list-wrapper">
        <ProductImage url={product.url} />
        <div className="productDetails">
          <span hidden>{product.id}</span>
          <br />
          <span hidden>{product.items}</span>
          <span hidden>{product.amount}</span>
          <span className="nombre">{product.name}</span>
          <br />
          <span className="desc">{product.desc}</span>
          <br />
          <span className="precio">{product.price}</span>
        </div>
        <input type="number" min={1} onClick={addToCart} />
      </div>
    </li>
  );
};

export default CartItem;

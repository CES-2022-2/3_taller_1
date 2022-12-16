import Product from "./product";

const ProductCatalog = ({ prods, addToCart }) => {
  return (
    <div className="productCatalog">
      <ul className="productList">
        {prods.map((prod) => (
          <Product key={prod.id} addToCart={addToCart} product={prod} />
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;

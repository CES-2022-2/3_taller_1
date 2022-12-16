import { useState } from "react";
import "./styles/App.css";
import { SourceProducts } from "./data/SourceProducts";
import ProductCatalog from "./components/ProductCatalog";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [shoppingCart, updateShoppingCart] = useState([]);

  const addToCart = (product) => {
    //Creando un carrito para sobreescribir el nuevo
    const newShoppingCart = [...shoppingCart];
    console.log(newShoppingCart);

    //Buscar si el item ya esta dentro del carrito
    const itemFound = shoppingCart.findIndex(
      //FindIndex traerá el indice del item. Si no lo encuentra retornará -1
      (cartItem) => cartItem.id === product.id
    );
    console.log(itemFound);
    if (itemFound !== -1) {
      //Si encuentra el item, se actualizará la cantidad
      //buscando el producto por id
      const cartItem = shoppingCart.find(
        (cartItem) => cartItem.id === product.id
      );

      if (cartItem.items < product.amount) {
        newShoppingCart[itemFound] = {
          ...product,
          items: cartItem.items + 1,
        };

        updateShoppingCart(newShoppingCart);
      }
      // Validando que no se ingresen mas items de los que hay desponibles
      updateShoppingCart(newShoppingCart);
    } else {
      //Si no lo encuentra, lo añadirá al carrito de compras
      updateShoppingCart([...newShoppingCart, { ...product, items: 1 }]); //estaba intentando agregarlo con un push
    }
  };

  return (
    <div className="App">
      <div>
        <ProductCatalog prods={SourceProducts} addToCart={addToCart} />
        <ShoppingCart CartItems={shoppingCart} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;

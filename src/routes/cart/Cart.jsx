import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";

const Cart = () => {
  const storeData = useSelector((state) => state);

  const productPrices = storeData.cartProducts.map((i) => +i.price);
  const total = productPrices.reduce((a, b) => a + b, 0);

  console.log(total);
  return (
    <>
      <Container>
        <Search />
        <div className="cart__cards">
          {storeData.cartProducts.map((product) => (
            <div className="product__card">
              <div className="product_card__image-wrapper">
                <img src={product?.images[0]} alt="" />
              </div>
              <h4>{product?.title}</h4>
              <strong>{product?.price}$</strong>
              <button className="cart__delet">Delet</button>
            </div>
          ))}
        </div>
        <h3>Total: US {total}$</h3>
      </Container>
    </>
  );
};

export default Cart;

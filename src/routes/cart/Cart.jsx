import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Container } from "../../utils/Components";
import Search from "../../components/search/Search";
import { useDispatch } from "react-redux";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);

  const productPrices = storeData.cartProducts.map((i) => +i.price);
  const total = productPrices.reduce((a, b) => a + b, 0);

  const deleteCartProduct = (product) => {
    dispatch({ product: product, type: "DELETE_CART_PRODUCT" });
  };

  console.log(total);
  return (
    <>
      <Container>
        <Search />
        <div className="cart__cards">
          {storeData.cartProducts.map((product) => (
            <div className="product__card" key={product?.id}>
              <div className="product_card__image-wrapper">
                <img src={product?.images[0]} alt="" />
              </div>
              <h4>{product?.title}</h4>
              <strong>{product?.price}$</strong>
              <button
                className="cart__delet"
                onClick={() => deleteCartProduct(product)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <h3>Total: US {total}$</h3>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;

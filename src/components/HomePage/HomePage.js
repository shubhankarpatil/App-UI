/* eslint-disable jsx-a11y/img-redundant-alt */
import cpco from "../Images/CPCO.jpg";
import BF from "../Images/BF.jpg";
import DF from "../Images/DF.jpg";
import CPGO from "../Images/CPGO.jpg";
import "./HomePage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../cartContext';

const HomePage = () => {
  const { cart, addToCart, isProductInCart } = useCart();
  const navigate = useNavigate();

  const handleButtonClick = (product) => {
    console.log('Button clicked by', product.title)
    if (!isProductInCart(product.productId)) {
      console.log('!isProductInCart(product.productId)', !isProductInCart(product.productId))
      addToCart(product);
      sessionStorage.setItem('cartItemAdded', 'true');
    } else {
      navigate('/cart');
    }
  };
  
  // useEffect(() => {
  //   const cartItemAdded = sessionStorage.getItem('cartItemAdded');
  //   if (cartItemAdded === 'true') {
  //     const storedCart = JSON.parse(sessionStorage.getItem('cart'));
  //     if (storedCart && storedCart.length > 0) {
  //       console.log('Add to cart', addToCart, storedCart)
  //       storedCart.forEach(product => addToCart(product));
  //     }
  //   }
  // }, [addToCart]);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  return (
    <>
      <div className="main">
        <h1>
          <div className="product-container">
            <div className="product-image">
              <img src={cpco} alt="Cold Pressed Coconut Oil" loading="lazy" />
            </div>
            <div className="product-info">
              <div className="product-info-left">
                <h2>Cold Pressed Coconut Oil</h2>
                <p>Organically cold pressed coconut oil</p>
                <div className="product-fields">
                  <p style={{ paddingTop: "0px", marginBottom: "7px" }}>
                    <span className="label"> Freshness</span>:{" "}
                    <span className="value">New</span> (Extra Fresh)
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Delivery</span>: Bengaluru
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Stock</span>: 50 ltrs
                  </p>
                  <p style={{ marginBottom: "0px" }}>
                    <span className="label">Manufactured Date</span>: 31/07/2023
                  </p>
                </div>
              </div>
              <div className="product-info-right">
                <div className="product-price">Rs 300/L</div>
                <div className="cut-price">350</div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "2.3rem",
                    marginBottom: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Free delivery
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Delivery within 2 business day
                </p>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    const product = {
                      productId: "1",
                      title: "Cold Pressed Coconut Oil",
                      price: "300",
                      isCartEmpty: true,
                      quantity: 1,
                      image: '../Images/CPCO.jpg'
                    };
                    handleButtonClick (product);
                  }}
                >
                  {isProductInCart("1") ? "View Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </h1>

        <h1>
          <div className="product-container">
            <div className="product-image">
              <img src={BF} alt="Butter Fruit Image" loading="lazy" />
            </div>
            <div className="product-info">
              <div className="product-info-left">
                <h2>Butter Fruit/Avocado</h2>
                <p>Organically harvested butter fruit</p>
                <div className="product-fields">
                  <p style={{ paddingTop: "0px", marginBottom: "7px" }}>
                    <span className="label"> Freshness</span>:{" "}
                    <span className="value">New</span> (Extra Fresh)
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Delivery</span>: Bengaluru
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Stock</span>: 10 Kg
                  </p>
                  <p style={{ marginBottom: "0px" }}>
                    <span className="label">Harvested Date</span>: 31/07/2023
                  </p>
                </div>
              </div>
              <div className="product-info-right">
                <div className="product-price">Rs 180/Kg</div>
                <div className="cut-price">220</div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "2.3rem",
                    marginBottom: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Free delivery
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Delivery within 2 business day
                </p>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    const product = {
                      productId: "2",
                      title: "Butter Fruit",
                      price: "180",
                      isCartEmpty: true,
                      quantity: '1',
                      image: '../Images/BF.jpg'
                    };
                    handleButtonClick (product);
                  }}
                >
                  {isProductInCart("2") ? "View Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </h1>

        <h1>
          <div className="product-container">
            <div className="product-image">
              <img src={DF} alt="Diced Dragon Fruit" loading="lazy" />
            </div>
            <div className="product-info">
              <div className="product-info-left">
                <h2>Dragon Fruit</h2>
                <p>Organically harvested dragon fruit</p>
                <div className="product-fields">
                  <p style={{ paddingTop: "0px", marginBottom: "7px" }}>
                    <span className="label"> Freshness</span>:{" "}
                    <span className="value">New</span> (Extra Fresh)
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Delivery</span>: Bengaluru
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Stock</span>:{" "}
                    <span className="stock">Out of stock</span>
                  </p>
                  <p style={{ marginBottom: "0px" }}>
                    <span className="label">Harvested Date</span>: 20/07/2023
                  </p>
                </div>
              </div>
              <div className="product-info-right">
                <div className="product-price">Rs 180/Kg</div>
                <div className="cut-price">220</div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "2.3rem",
                    marginBottom: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Free delivery
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Delivery within 2 business day
                </p>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    const product = {
                      productId: "3",
                      title: "Dragon Fruit",
                      price: "180",
                      isCartEmpty: true,
                      quantity: '1',
                      image: '../Images/DF.jpg'
                    };
                    handleButtonClick (product);
                  }}
                >
                  {isProductInCart("3") ? "View Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </h1>

        <h1>
          <div className="product-container">
            <div className="product-image">
              <img src={CPGO} alt="Cold Pressed Groundnut Oil" loading="lazy" />
            </div>
            <div className="product-info">
              <div className="product-info-left">
                <h2>Cold Pressed Groundnut Oil</h2>
                <p>Organically cold pressed groundnut oil</p>
                <div className="product-fields">
                  <p style={{ paddingTop: "0px", marginBottom: "7px" }}>
                    <span className="label"> Freshness</span>:{" "}
                    <span className="value">New</span> (Extra Fresh)
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Delivery</span>: Bengaluru
                  </p>
                  <p style={{ marginBottom: "7px" }}>
                    <span className="label">Stock</span>:{" "}
                    <span className="stock">Out of stock</span>
                  </p>
                  <p style={{ marginBottom: "0px" }}>
                    <span className="label">Harvested Date</span>: 20/07/2023
                  </p>
                </div>
              </div>
              <div className="product-info-right">
                <div className="product-price">Rs 300/Kg</div>
                <div className="cut-price">350</div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "2.3rem",
                    marginBottom: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Free delivery
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    paddingTop: "0px",
                    color: "grey",
                    paddingLeft: "0px",
                  }}
                >
                  Delivery within 2 business day
                </p>
                <button className="add-to-cart-button">Add to cart</button>
              </div>
            </div>
          </div>
        </h1>
      </div>
    </>
  );
};

export default HomePage;

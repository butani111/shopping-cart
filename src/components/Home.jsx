import React from "react";
import toast from "react-hot-toast";
import "../styles/home.scss";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 135000,
      imgSrc: img1,
      id: "dlfkjeifjdfdslkfjsdf",
    },
    {
      name: "Black Shoes",
      price: 1100,
      imgSrc: img2,
      id: "dlfkjeifjdfdslkfjsdg",
    },
  ];

  const addToCartHandler = (options) => {
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="product-card">
    <img src={imgSrc} alt={name} />
    <p>{name} </p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, id, price, imgSrc, quantity: 1 })}>
      Add to Cart
    </button>
  </div>
);

export default Home;

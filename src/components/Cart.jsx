import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../styles/cart.scss";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          id="fldkj"
          name={"Mac Book"}
          price={13500}
          qty={1}
          imgSrc={img1}
        />
      </main>

      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${2000}</h2>
        <h2>Tax: ${2000}</h2>
        <h2>Total: ${2000}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  id,
  name,
  price,
  qty,
  imgSrc,
  increament,
  decrement,
  deleteHandler,
}) => (
  <div className="cart-item">
    <img src={imgSrc} alt="Item" />

    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increament(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;

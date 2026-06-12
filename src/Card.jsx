import { useState } from "react";

const Card = ({ flower }) => {
  if (flower.name === "Orchid") {
    throw new Error("Orchid card is intentionally broken");
  }

  const [price, setPrice] = useState(flower.price);
  const [isWishlist, setWishlist] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const disc = (discperc) => {
    const dis = (price * discperc) / 100;
    const final = price - dis;
    setPrice(Math.round(final));
  };

  const toggle = () => {
    setWishlist((prev) => !prev);

    if (!isWishlist) {
      alert("Added to Wishlist ❤️");
    } else {
      alert("Removed from Wishlist 🤍");
    }
  };

  const handleAddToCart = () => {
    if (!isCart) {
      alert("Added To Cart 🛒");
      setIsCart(true);
    } else {
      alert("Removed From Cart ❌");
      setIsCart(false);
    }
  };

  return (
    <div className="carda">
      <img
        src={flower.img}
        alt="product"
        width="150px"
        height="130px"
      />

      <h2>
        <i>{flower.name}</i>
      </h2>

      <p>
        <b>₹{price}/-</b>
      </p>

      <button onClick={toggle}>
        {isWishlist ? "❤️" : "🤍"}
      </button>

      <br />
      <br />

      <button onClick={() => disc(flower.disc)}>
        {flower.disc}% Discount
      </button>

      <br />
      <br />

      {flower.stock ? (
        <>
          <button onClick={handleAddToCart}>
            {isCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </>
      ) : (
        <p style={{ color: "red", fontSize: "20px" }}>
          <b>Out of Stock</b>
        </p>
      )}
    </div>
  );
};

export default Card;

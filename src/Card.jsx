import { useState } from "react"

const Card = ({flower})=>{
      if (flower.name === "Orchid") {
    throw new Error("Orchid card is intentionally broken");
  }

  

    const [price,setPrice]=useState(flower.price);
    const [isWishlist,setWishlist] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [cartMessage, setCartMessage] = useState("");


    const disc=(discperc)=>{
        const dis = price*discperc/100;
        const final = price - dis;
        setPrice(Math.round(final))
    }
    const toggle =()=>{
    setWishlist(prevIswish => !prevIswish);
     if (!isWishlist) {
    alert("Added to Wishlist ❤️");
  } else {
    alert("Removed from Wishlist 🤍");
  }

  };
   const handleAddToCart = () => {
    setCartMessage("Added To Cart 🛒");
    setShowConfirmation(true);
  };

  const confirmOrder = () => {

    console.log('Proceeding to order...');
    
    setShowConfirmation(false);
  };

  const cancelOrder = () => {
    setShowConfirmation(false); 
  };
 

    return(
        <div className="carda">
            <img src={flower.img} alt="product" width="150px" height="130px" >
            </img>
            <h2><i>{flower.name}</i></h2>
            <p> <b>₹{(price)}/-</b></p>

            <button onClick={toggle}>
             {isWishlist ? "❤️" : "🤍"}
            </button>
            <br />
            <br />

            <button onClick={()=>{disc(flower.disc)}}>
                {flower.disc}% discount
            </button>
            


            <br />
            
            <br />

            {flower.stock ? (
  <>
    <button onClick={handleAddToCart}>cart</button>
    {cartMessage && <p>{cartMessage}</p>}

    
  </>
) : (
  <p style={{ color: "red", fontSize: "20px" }}>
    <b>Out of stock</b>
  </p>
)}
        </div>
    )


}
export default Card
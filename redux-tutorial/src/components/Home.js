import React from "react";

function Home(props) {
    console.log(props.data);
  return (
    <div>
     
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu03fxSGRMdnX9-nf9ZmcTPgsAZOZz3Fjn671VQgylGarcMvxZqXAXA0Zz73NuSV2XmU&usqp=CAU"></img>
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <br />
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={() => {props.addToCartHandler({"price":1000,"name":"I-Phone"})}}>Add To Cart</button>
        </div>
        <div className="btn-wrapper item">
          <button className="remove-btn" onClick={() => {props.removeToCartHandler()}}>Remove To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

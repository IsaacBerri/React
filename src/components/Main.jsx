import React, { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const [products, setProucts] = useState([]);
  
  
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProucts(data));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
            <img src={product.images[0]} alt="" />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;

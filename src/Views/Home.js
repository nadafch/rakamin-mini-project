import React, { useEffect, useState } from "react";
import HelloWorld from "../Component/HelloWorld";
import axios from "axios";
import ProductCard from "../Component/ProductCard";
import { useParams } from "react-router-dom";
import Loader from "../Component/Loader";

export default function Home() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const url = "https://63fc9eab859df29986c0aafd.mockapi.io/crud/product/";
    axios.get(url).then((response) => setProduct(response.data));
  }, []);

  return (
    <div className="w-full p-3">
      <div className="text-2xl font-bold mb-7">
        <HelloWorld name="Nada" />
      </div>
      <div className="w-full flex flex-wrap justify-around gap-7 p-3">
        {product ? (
          product.map((index) => (
            <ProductCard
              id={index.id}
              name={index.name}
              image={index.image}
              price={index.price}
              description={index.description}
            />
          ))
        ) : (
          <div>There is no data</div>
        )}
      </div>
    </div>
  );
}

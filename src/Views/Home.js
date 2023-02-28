import React, { useEffect, useState } from "react";
import HelloWorld from "../Component/HelloWorld";
import ProductCard from "../Component/ProductCard";
import HttpRequest from "../Hooks/HttpRequest";
import Loader from "../Component/Loader";

export default function Home() {
  const url = "https://63fc9eab859df29986c0aafd.mockapi.io/crud/product/";
  let product = HttpRequest(url);
  console.log(product);

  return (
    <div className="w-full p-3">
      <div className="text-2xl font-bold mb-7">
        <HelloWorld name="Nada" />
      </div>
      <div className="w-full flex flex-wrap justify-around gap-7 p-3">
        {product.data &&
          product.data.map((index) => (
            <ProductCard
              id={index.id}
              name={index.name}
              image={index.image}
              price={index.price}
              description={index.description}
            />
          ))}
        {product.loading && (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5">
              <Loader />
            </div>
            <div className="text-xl">Loading</div>
          </div>
        )}
        {product.error && (
          <div className="text-sky-600">
            There was an error please refresh or try again later.
          </div>
        )}
      </div>
    </div>
  );
}

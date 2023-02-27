import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <div className="w-[250px] max-h-[300px] overflow-y-auto border rounded-md bg-stone-100 p-2 flex flex-wrap justify-center items-center">
      <div className="w-[150px] rounded-sm">
        <img src={props?.image} alt={props?.image} />
      </div>
      <h1 className="font-bold text-xl">{props?.name}</h1>
      <p className="text-sm">{props?.price}</p>
      <p className>{props?.description}</p>
      <button
        className="w-24 mt-4 p-2 bg-sky-600 text-white rounded-lg"
        onClick={() =>
          navigate(`/products/${props?.id}`, {
            state: {
              id: props?.id,
              name: props?.name,
              image: props?.image,
              price: props?.price,
              description: props?.description,
            },
          })
        }
      >
        Detail
      </button>
    </div>
  );
}

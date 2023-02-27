import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(location?.state);
  }, [location?.state]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full flex justify-around p-5">
      <div className="w-1/2">
        <img src={data.image} alt={data.image} />
      </div>
      <div className="flex flex-col items-start">
        <div>
          <span className="font-bold">Name : </span>
          {data.name}
        </div>
        <div>
          <span className="font-bold">Price : </span>
          {data.price}
        </div>
        <div className="w-[300px] text-justify">
          <span className="font-bold">Description : </span>
          {data.description}
        </div>
      </div>
    </div>
  );
}

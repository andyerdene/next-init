import React from "react";
import { useRouter } from "next/router";

const dataBE = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];

export default function Index() {
  const btnClass = "w-[100px] h-[20px] bg-gray-400 mr-2";
  const router = useRouter();

  return (
    <div>
      <h1>Produt main page</h1>
      {dataBE.map((item) => {
        return (
          <button onClick={() => router.push(`/product/${item.id}`)}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

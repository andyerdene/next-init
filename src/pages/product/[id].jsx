import React, { useEffect, useState } from "react";

export default function Page(props) {
  const { data } = props;

  async function fetchClient() {
    await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  }

  return (
    <div className="p-[100px] text-2xl">
      <button className="bg-gray-500" onClick={() => router.push("/product")}>
        Home
      </button>
      <h1>{data.title}</h1>
      <h2>{data.id}</h2>
      <h3>{data.completed ? "True" : "False"}</h3>
      <button onClick={fetchClient}>Client Fetch</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${query.id}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

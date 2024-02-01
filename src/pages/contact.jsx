import React from "react";

export default function Page(abc) {
  console.log("props: ", abc);
  return <div>{abc.data.title}</div>;
}

export const getStaticProps = async (context) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();

  return {
    props: { data: data },
  };
};

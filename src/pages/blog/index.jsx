import React, { useState } from "react";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";

export default function Page(props) {
  const [articles, setArticles] = useState(props.articles);
  return (
    <>
      <SubHeader />
      <h1>load more</h1>
    </>
  );
}

// const getServerSideProps = async (context) => {
//     const { query } = context;
//     console.log(query);
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${query.id}`
//     );
//     const data = await response.json();
//     return {
//         props: {
//         data,
//         },
//     };
// }

import React from "react";

export default function Layout({ children }) {
  console.log({ children });
  return (
    <>
      <h1>1</h1>
      <div className="bg-dark">{children}</div>
    </>
  );
}

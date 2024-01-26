import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const [todo, setTodos] = useState();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await res.json();
      setTodos(data);
    };
    if (id) {
      getData();
    }
  }, [id]);

  if (!id) return <div>Loading...</div>;

  return (
    <div className="p-[100px] text-2xl">
      <button className="bg-gray-500" onClick={() => router.push("/product")}>
        Home
      </button>
      <h1 className="text-2xl">Title: {todo?.title}</h1>
      <p>Completed: {todo?.completed ? "True" : "False"}</p>
    </div>
  );
}

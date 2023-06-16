import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");

  const [items, setItems] = useState([]);

  useEffect(() => {
    //console.log(nanoid(10));
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

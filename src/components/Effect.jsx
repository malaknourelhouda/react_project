import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
          data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Effect;

import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleMemeFunction();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(document.body.scrollHeight);

    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      handleMemeFunction();
    }
  };

  const handleMemeFunction = async () => {
    const data = await fetch(`https://meme-api.com/gimme/50`);
    const response = await data.json();
    setData((memes) => [...memes, ...response.memes]);
  };

  return (
    <div>
      {data.map((meme) => {
        return <p key={meme.title}>{meme.title}</p>;
      })}
    </div>
  );
};

export default InfiniteScroll;

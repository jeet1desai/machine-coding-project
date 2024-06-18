import React, { useCallback, useEffect, useState } from "react";

const AutoCompleteSearch = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isResultVisible, setResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[search]) {
      console.log("cache");
      setSearchResult(cache[search]);
    } else {
      console.log("API");
      const data = await fetch(`https://www.google.com/complete/search?client=firefox&q=${search}`);
      const json = await data.json();

      cache[search] = json[1];
      setSearchResult(json[1]);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchData();
    }, [500]);
    return () => clearTimeout(timer);
  }, [search]);

  console.log(cache);

  return (
    <div className="auto-complete">
      <input
        onBlur={() => setResultVisible(false)}
        onFocus={() => setResultVisible(true)}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        value={search}
      />
      {isResultVisible && searchResult.length > 0 && (
        <ui className="search-result">
          {searchResult.map((search, index) => {
            return <li key={index}>{search}</li>;
          })}
        </ui>
      )}
    </div>
  );
};

export default AutoCompleteSearch;

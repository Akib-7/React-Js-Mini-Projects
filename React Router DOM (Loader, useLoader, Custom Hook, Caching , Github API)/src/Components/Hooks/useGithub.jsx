import React from "react";
import { useState, useEffect } from "react";
const cache = {};
const useGithub = (username = "Akib-7") => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (cache[username]) {
        setData(cache[username]);
        console.log("Giving Data from cache");
        return;
      }
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const info = await response.json();
      cache[username] = info;
      setData(info);
      console.log("New Fetched Data");
      setLoading(false);
    };
    fetchData();
  }, [username]);
  return { data, loading };
};

export default useGithub;

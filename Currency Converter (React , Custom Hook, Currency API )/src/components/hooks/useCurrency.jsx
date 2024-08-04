import { useEffect, useState } from "react";

const useCurrency = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
      );
      const info = await response.json();
      setData(info[currency]);
    };

    fetchData();
  }, [currency]);

  return data;
};

export default useCurrency;

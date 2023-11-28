import { useState, useEffect } from "react";

const useFetchData = (url: string, type: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData[`${type}`]);
      } catch (error: Error | any) {
        console.log("error", typeof error, error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, url]);

  return { data, loading, error };
};

export default useFetchData;

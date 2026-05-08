import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useGetFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const res = await axios.get(url);
      console.log("res->", res);
      setData(res.data);
    })();
  }, [url]);
  return [data];
};

export default useGetFetch;

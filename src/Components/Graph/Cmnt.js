import { sum } from "d3";
import React, { useState, useEffect } from "react";

function Cmnt() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    var sum=0;
    await fetch("http://qts.iitkgp.ac.in/last/shm/6000").then((data)=> {
        console.log("Api data", data)
        const res = data.json();
        return res
    }).then((res) => {
        console.log("ressss", res)
        for (const val of res) {
            sum+=(val.NH3);
        }
        sum/=6000;
    })
    
  }
  useEffect(() => {
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    {sum}
    </div>
  );
};

export default Cmnt;

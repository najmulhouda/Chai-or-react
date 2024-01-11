import React, { useEffect, useState } from "react";
function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/najmulhouda")
      .then((Response) => Response.json())
      .then((data) => setData(data));
  }, [data]);

  return (
    <div className="text-3xl text-center text-white bg-gray-600 m-4  p-4 flex justify-between">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;

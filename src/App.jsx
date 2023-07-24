import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "http://localhost:5050/api/v1/posts";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error.response.data.user);
        setData(error.response.data.user);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div className="div">
      <h1>Data list</h1>

      <hr />

      {data.map((item, key) => {
        return (
          <p key={key}>
            <p>No : {key + 1}</p>
            <p>Name :{item.name}</p>

            <p>Email :{item.email}</p>
            <hr />
          </p>
        );
      })}
    </div>
  );
};

export default App;

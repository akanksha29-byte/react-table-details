import "./styles.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((result) => result.json());
      setData([...result]);
    };

    fetchApi();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>City</td>
          <td>Phone</td>
          <td>Website</td>
          <td>Company Name</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;

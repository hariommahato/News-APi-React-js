import React, { useEffect, useState } from 'react';
import './DisplayData.css';
const DIsplayData = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    setUsers(await res.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>List of Data</h1>
      <div className="data__box">
        {users.map((el, key) => {
          console.log(el);
          return (
            <div className="data__show">
              <h3>Id:{el.id}</h3>
              <h5>name:{el.name}</h5>
              <h5>Email:{el.email}</h5>
              <h6>About:{el.body}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DIsplayData;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const App = () => {
  const [data, setData] = useState([])
  const [showPerPage, setShowPerPage] = useState(50)
  const [pagination, setPagination] = useState({
    start: 0,
    end:showPerPage
  })
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(res=>setData(res.data))
  })
  
  const onChangePagination = (start, end) => {
    setPagination({start:start,end:end})
  }
  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(pagination.start, pagination.end).map((li) => (
            <tr key={li.id}>
              <td>{li.id}</td>
              <td>{li.name}</td>
              <td>{li.email}</td>
              <td>{li.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        showPerPage={showPerPage}
        onChangePagination={onChangePagination}
        total={data.length}
      />
    </div>
  );
};

export default App;
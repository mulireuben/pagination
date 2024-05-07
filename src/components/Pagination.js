import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Pagination() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id'
    },
    {
      title: 'Employee Name',
      dataIndex: 'employee_name'
    },
    {
      title: 'Employee Salary',
      dataIndex: 'employee_salary'
    },
    {
      title: 'Employee Age',
      dataIndex: 'employee_age'
    },
    {
      title: 'Profile pic',
      dataIndex: 'profile_image'
    }
  ];

  const fetchData = () => {
    setLoading(true);
    axios
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .then((res) => {
        setDataSource(res.data);
        setTotalPages(res.totalPages);
        console.log(res.data);
        setLoading(false);
      });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 8,
          total: totalPages
        }}
      ></Table>
    </div>
  );
}

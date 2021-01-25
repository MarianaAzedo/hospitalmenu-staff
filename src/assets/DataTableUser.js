import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataTableUser() {
  const [user, setUser] = React.useState('');

  //get method
  useEffect(() => {
    api
      .GET('/users', {
        room: '',
        name: '',
        dateofbirth: '',
        allergens: {},
        comments: '',
      })
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  const columns = [
    { field: 'room', headerName: 'Room', width: 100 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'date', headerName: 'Date of Birth', width: 150 },
    {
      field: 'diet',
      headerName: 'Diet',
      width: 90,
    },
    {
      field: 'comments',
      headerName: 'Comments',
      width: 160,
    },
  ];

  const rows = [
    {
      room: { room },
      name: { name },
      date: { dateofbirth },
      diet: { allergens },
      comments: { comments },
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
}

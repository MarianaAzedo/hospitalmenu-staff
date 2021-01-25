import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataTableMenu() {
  //get method
  useEffect(() => {
    api
      .GET('/menuroom', {})
      .then((response) => response.json())
      .then((json) => setMenu(json));
  }, []);

  const [menu, setMenu] = React.useState('');

  const columns = [
    { field: 'room', headerName: 'Room', width: 100 },
    { field: 'breakfast', headerName: 'Breakfast', width: 130 },
  ];

  const rows = [{ room: { room }, breakfast: { breakfast } }];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
}

import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAddTodo = () => {
    if (!description || !date) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      date
    };

    setTodos([...todos, newTodo]);
    setDescription('');
    setDate('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  const columns = [
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'date', headerName: 'Date', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <Tooltip title="Delete todo">
          <IconButton onClick={() => handleDeleteTodo(params.id)} size="small" style={{ color: 'red' }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  const rows = todos.map(todo => ({ ...todo, id: todo.id.toString() }));

  return (
    <div style={{ backgroundColor: 'white', color: 'white', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button
          variant="contained"
          onClick={handleAddTodo}
          startIcon={<SaveIcon />}
          style={{ marginLeft: '10px' }}
        >
          Add Book
        </Button>
        <Button
          variant="contained"
          onClick={handleClearTodos}
          startIcon={<ClearIcon />}
          style={{ marginLeft: '10px' }}
        >
          Clear
        </Button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.id}
        />
      </div>
    </div>
  );
}

export default TodoList;

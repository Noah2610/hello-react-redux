import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'
import './App.css'

import FilterableProductTable from './components/filterableProductsTable/FilterableProductTable'
import TodoApp from './components/reduxTodo/TodoApp'

const Box = styled.div`
  display: block;
  border: solid 1px black;
  border-radius: 16px;
  margin-bottom: 16px;
`

function App() {
  return (
    <div className="App">
      <Box>
        <div className="App-header">Filterable Products Table</div>
        <FilterableProductTable />
      </Box>
      <Box>
        <div className="App-header">Todo List</div>
        <TodoApp />
      </Box>
    </div>
  )
}

export default App

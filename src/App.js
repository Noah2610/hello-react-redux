import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'
import './App.css'

import FilterableProductTableContainer from './containers/FilterableProductTable'
import TodoAppContainer from './containers/TodoApp'

const Box = styled.div`
  display: block;
  border: solid 1px black;
  border-radius: 16px;
  margin-bottom: 16px;
`

function App() {
  return (
    <div className="App">
      <FilterableProductTableContainer />
      <TodoAppContainer />
    </div>
  )
}

export default App

import React from 'react'
import styled from 'styled-components'

import FilterableProductTable from '../components/learning/filterableProductsTable/FilterableProductTable.jsx'
import TodoApp from '../components/learning/reduxTodo/TodoApp.jsx'

const Box = styled.div`
  border: solid 1px black;
  display: block;
`

class LearningContainer extends React.Component {
  render() {
    return (
      <div>
        <Box>
          <FilterableProductTable />
        </Box>
        <Box>
          <TodoApp />
        </Box>
      </div>
    )
  }
}

export default LearningContainer

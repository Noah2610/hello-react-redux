import React from 'react'
import styled from 'styled-components'

import FilterableProductTable from '../components/FilterableProductTable.jsx'
import TodoApp from '../components/TodoApp.jsx'
import Box from '../components/Box.jsx'

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

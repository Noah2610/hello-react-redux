import React from 'react'
import styled from 'styled-components'

import FilterableProductTable from '../components/FilterableProductTable.jsx'
import Box from '../components/Box.jsx'

function FilterableProductTableContainer(props) {
  return (
    <Box>
      <div className="App-header">Filterable Products Table</div>
      <FilterableProductTable />
    </Box>
  )
}

export default FilterableProductTableContainer

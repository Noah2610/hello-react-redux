import React from 'react'

import SearchBar from './SearchBar.jsx'
import CheckBox from './CheckBox.jsx'

function ProductFilter(props) {
  const { onSearch, onToggleOnlyInStock } = props

  return (
    <div>
      <SearchBar onChange={onSearch}>Search...</SearchBar>
      <br />
      <CheckBox onChange={onToggleOnlyInStock}>
        Only show products in stock?
      </CheckBox>
    </div>
  )
}

export default ProductFilter

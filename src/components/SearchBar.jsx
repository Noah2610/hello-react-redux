import React from 'react'

function SearchBar(props) {
  const { onChange, children } = props

  return <input type="text" placeholder={children} onChange={onChange} />
}

export default SearchBar

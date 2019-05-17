import React from 'react'

function CheckBox(props) {
  const { onChange, children } = props

  return (
    <label>
      <input type="checkbox" onChange={onChange} />
      {children}
    </label>
  )
}

export default CheckBox

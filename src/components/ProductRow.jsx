import React from 'react'

function ProductRow(props) {
  const { name, price, inStock } = props
  return (
    <tr>
      <td>
        <ColoredText color={inStock || 'red'}>{name}</ColoredText>
      </td>
      <td>${price}</td>
    </tr>
  )
}

function ColoredText(props) {
  return <span style={{ color: props.color || null }}>{props.children}</span>
}

export default ProductRow

import React from 'react'

import ProductRow from './ProductRow.jsx'
import ProductCategoryRow from './ProductCategoryRow.jsx'

function matchesFilter(target, filter) {
  return target.toLowerCase().match(escapeRegexp(filter.toLowerCase()))
}

function escapeRegexp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

function ProductTable(props) {
  const { categories, filter, onlyInStock } = props

  let rows = []
  categories.forEach(category => {
    const productsInCategory = category.products
      .filter(product => {
        return (
          (!onlyInStock || (onlyInStock && product.inStock)) &&
          (matchesFilter(category.name, filter) ||
            matchesFilter(product.name, filter))
        )
      })
      .map(product => {
        return (
          <ProductRow
            key={product.name}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        )
      })
    if (productsInCategory.length > 0) {
      rows.push(
        <ProductCategoryRow key={category.name}>
          {category.name}
        </ProductCategoryRow>
      )
      rows = rows.concat(productsInCategory)
    }
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable

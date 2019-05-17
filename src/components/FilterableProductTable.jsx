import React from 'react'

import ProductTable from './ProductTable.jsx'
import ProductFilter from './ProductFilter.jsx'

const categoriesMock = [
  {
    name: 'Sporting Goods',
    products: [
      {
        name: 'Football',
        price: 49.99,
        inStock: true,
      },
      {
        name: 'Baseball',
        price: 9.99,
        inStock: true,
      },
      {
        name: 'Basketball',
        price: 29.99,
        inStock: false,
      },
    ],
  },
  {
    name: 'Electronics',
    products: [
      {
        name: 'iPod',
        price: 99.99,
        inStock: true,
      },
      {
        name: 'iPhone 5',
        price: 399.99,
        inStock: false,
      },
      {
        name: 'Nexus 7',
        price: 199.99,
        inStock: true,
      },
    ],
  },
]

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchValue: '', showOnlyInStock: false }
    this.onSearch = this.onSearch.bind(this)
    this.onToggleOnlyInStock = this.onToggleOnlyInStock.bind(this)
  }

  onSearch(event) {
    event.persist()
    event.preventDefault()
    this.setState({ searchValue: event.target.value })
  }

  onToggleOnlyInStock(event) {
    event.persist()
    this.setState({ showOnlyInStock: event.target.checked })
  }

  render() {
    return (
      <div>
        <ProductFilter
          onSearch={this.onSearch}
          onToggleOnlyInStock={this.onToggleOnlyInStock}
        />
        <ProductTable
          categories={categoriesMock}
          filter={this.state.searchValue}
          onlyInStock={this.state.showOnlyInStock}
        />
      </div>
    )
  }
}

export default FilterableProductTable

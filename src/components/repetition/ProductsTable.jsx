import React from "react";
import products from "../../data/products";
import './ProductsTable.css'

export default (props) => {

  const lines = products.map((product, i) => {
        return (
            <tr key={product.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>U$ {product.price.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

  return (
    <div className="ProductsTable">
      <table>
        <thead>
          <tr className="head">
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
            {lines}
        </tbody>
      </table>
    </div>
  );
};

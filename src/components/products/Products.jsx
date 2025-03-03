import React from 'react'
import styles from './Products.module.css'
import { useProductContext } from '../context/Context'


function Products({title, price}) {
  const {addItem, addPrice, removeItem} = useProductContext();

  const addProduct = () => {
    addItem()
    addPrice(price)
  }

  const removeProduct = () => {
    removeItem(price)
  }
  return (
   
    <div className={styles.container} >
      <p>{title}</p>
      <p>price : ${price}</p>
      <div> 
        <button onClick={addProduct} >add</button>
        <button onClick={removeProduct}  >remove</button>
      </div>

    </div>
  )
}

export default Products

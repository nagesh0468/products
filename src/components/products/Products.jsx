import React from 'react'
import styles from './Products.module.css'
import { useProductContext } from '../context/Context'


function Products({title, price}) {
  const {addItem, addPrice} = useProductContext();

  const addProduct = () => {
    addItem()
    addPrice(price)
  }
  return (
   
    <div className={styles.container} >
      <p>{title}</p>
      <p>price : ${price}</p>
      <div> 
        <button onClick={addProduct} >add</button>
        <button>remove</button>
      </div>

    </div>
  )
}

export default Products

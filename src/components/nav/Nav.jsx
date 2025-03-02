import React from 'react'
import styles from './nav.module.css'
import { useProductContext } from '../context/Context'


function Nav() {
  const {item, value} = useProductContext()
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h1>myApp</h1>
      </div>
       <div className={styles.nav}>
        
           <li>Home</li>
           <li>items({item})</li>
           <li>total({value})</li>
         
       </div>
      
    </nav>
  )
}

export default Nav

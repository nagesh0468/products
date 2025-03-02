import { createContext, useContext, useState } from 'react'

const productContaxt = createContext();
const useProductContext = () => {
  const value = useContext(productContaxt)
  return value ;
} 
function CustomContext({children}) {
  const [item, setItem] = useState(0);
  const [value, setValue] = useState(0);

  let addItem = () => {
    setItem(pre => {
      return pre + 1;
    })
  }
  let addPrice =(price) => {
    setValue(pre => {
      return pre + price;
    })
  }
  return (
    <productContaxt.Provider value={{
      item,
      value,
      addItem,
      addPrice
    }} >
      {children}
    </productContaxt.Provider>
  )
}

export { CustomContext, useProductContext}


import './App.css'
import { CustomContext } from './components/context/Context';
import Nav from './components/nav/nav'
import Products from './components/products/Products'


function App() {

  const products = [
    { id: 1, name: "Laptop", price: 75 },
    { id: 2, name: "Smartphone", price: 30 },
    { id: 3, name: "Headphones", price: 25 },
    { id: 4, name: "Smartwatch", price: 10 },
    { id: 5, name: "Tablet", price: 40 },
    { id: 6, name: "Keyboard", price: 15 },
    { id: 7, name: "Mouse", price: 12 },
    { id: 8, name: "Monitor", price: 20 }
  ];
  return (
    <>
      <CustomContext>
        <Nav />
        <div className='products'>
          {
            products.map(product => (<Products key={product.id} title={product.name} price={product.price} />))
          }

        </div>
      </CustomContext>
    </>
  )
}

export default App

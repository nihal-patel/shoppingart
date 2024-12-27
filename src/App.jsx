import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {
  const [cart, setcart] = useState([])
  const [warning, setwarning] = useState(false)
  const [show, setshow] = useState(true)

  const handleClick = (item) => {
    let isPresent = false;
    cart.map((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      setwarning(true)
      setTimeout(() => {
        setwarning(false)
      }, 2000);
      return;
    }
    setcart([...cart, item])
  }

  const handlechange = (item, d) => {
    let ind = -1;
    cart.map((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    console.log(tempArr);

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;

    }
    setcart([...tempArr])
  }


  return (
    <>
      <Navbar size={cart.length} setshow={setshow} />

      {
        show ? <Shop handleClick={handleClick} /> :
          <Cart cart={cart} setcart={setcart} handlechange={handlechange} />
      }

      {
        warning && <div className='warning'>
          <p>Item is already present in cart</p>
        </div>
      }
    </>
  )
}

export default App
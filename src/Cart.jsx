import {React, useState} from 'react'
import P1 from '../src/assets/product1.jpg'
import P2 from '../src/assets/product2.webp'
import './cart.css'

const Cart = () => {
    const [quantity, setQuantity] = useState(0)
    const [quantity1, setQuantity1] = useState(0)
    const [price, setPrice] = useState(0)
    const [price1, setPrice1] = useState(0)

    function handleIncrease(){
        let count = quantity+1
        setQuantity(count)
        setPrice(price+2)
        

    }

    function handleDecrease(){
        let count = quantity-1
        setQuantity(count)
        setPrice(price-2)

    }

    function Increaseclick(){
        let count1 = quantity1+1
        setQuantity1(count1)
        setPrice1(price1+5)

    }

    function Decreaseclick(){
        let count1 = quantity1-1
        setQuantity1(count1)
        setPrice1(price1+5)
        
        
    }

    const total = price * quantity + price1 * quantity1



  return (
    <div className='main_cart'>
        {/* Product 1 starts from here */}
        <div className='shopping_cart'>
        <h1>Shopping Cart</h1>

        <div className='Prodcut'>

        <img src={P1} alt="Product 1 Image" />
            <h3>Apple Jucie</h3>
            <p>250ml</p>

            <p>Price:$2</p>

            <button onClick={handleIncrease} className='quantity-btn'>+</button>
            <h3>{quantity}</h3>
            <button onClick={handleDecrease} className='quantity-btn'>-</button>

            
        </div>

        {/* Product 2 starts from here */}
 
        <div className='Prodcut'>

        <img src={P2} alt="Product 2 Image" />
            <h3>Grapes Jucie</h3>
            <p>250ml</p>

            <p>Price:$5</p>

            <button onClick={Increaseclick} className='quantity-btn'>+</button>
            <h3>{quantity1}</h3>
            <button onClick={Decreaseclick} className='quantity-btn'>-</button>

            
        </div> 

        {/* Total price calculation */}
            <h2>Total Price: ${total}</h2>
            <button to='/checkout' className='chk-btn' onClick={()=>{
                alert('Your Order will deliver shorlty')
            }}>Checkout</button>

            
        </div>
      
    </div>
  )
}

export default Cart

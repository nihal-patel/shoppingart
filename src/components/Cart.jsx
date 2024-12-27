import { useEffect, useState } from "react"
import '../style/cart.css'


const Cart = ({ cart, setcart, handlechange }) => {

    const [price, setprice] = useState('0');


    const handleremove = (id) => {
        const newcart = cart.filter((item) => item.id !== id)
        setcart(newcart)
    }

    const handleprise = () => {
        let ans = 0;
        cart.map((item) => {
            ans += item.amount * item.price;
        })
        setprice(ans);
    }

    useEffect(() => {
        handleprise();
    })

    return (
        <div>
            {
                cart?.map((item) => (
                    <div className="cart_Box" key={item.id}>
                        <div className="cart_Img">
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                        </div>
                        <div className="buttons">
                            <button onClick={() => {
                                handlechange(item, +1)
                            }}>+</button>
                            <button onClick={() => {
                                handlechange(item, -1)
                            }}>-</button>

                            <div className="amount">
                                <span>{item.amount}</span>
                            </div>
                        </div>
                        <div className="remove">
                            <span>{item.price}</span>
                            <button onClick={() => { handleremove(item.id) }}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs : {price}</span>
            </div>
        </div>
    )
}

export default Cart
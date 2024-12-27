import '@fortawesome/fontawesome-free/css/all.min.css'
import '../style/navbar.css'



const Navbar = ({size , setshow }) => {
  return (
    <nav>
        <div className="nav_box">
            <span className='my_shop' onClick={()=>setshow(true)}>Genuion</span>
            <div className="cart" onClick={()=>setshow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
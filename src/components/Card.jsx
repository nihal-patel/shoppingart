import "../style/card.css"

const Card = ({ item , handleClick}) => {
    const{title,author,price,img} = item;

    return (
        <div className="cards">
            <div className="img_box">
                <img src={img} alt="image"/>
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Price:{price} Rs</p>
                <button onClick={()=>handleClick(item)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Card
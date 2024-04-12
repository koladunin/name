import Button from "../Button/Button";
import './Card.css'
import photo from '/public/products/product.jpg'
import { NavLink } from "react-router-dom";

export default function Card({ id, name, price }) {
    return (
        <>  
        
            <NavLink to={`/catalog/${id}`}><div className="card">

                <div className="card-image">
                    <img src={photo} alt="product" />
                </div>

                <div className="card-title">{name}</div>
                <div className="card-price">{price} ₽</div>

                <Button backgroundColor="#333" color="#f3f3f3">В корзину!</Button>


            </div></NavLink>

        </>
    )
}
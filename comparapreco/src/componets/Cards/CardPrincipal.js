import './CardPrincipal.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
const CardPrincipal = (props) =>{

    return(
        <Link to={`/productcompare/${props.product.nome}`} class='button-geral'>

            <div class = 'card-background'>
                <div class = 'card-photo'>
                    <img src={props.product.foto} alt='Foto Produto'/>      
                    </div>
                <div class = 'card-Text'>
                    <h4> {props.product.nome}</h4>
                </div>
                <div class = 'card-price-background'>
                    <div class='card-price-description'>
                        <p class='card-price-value-desc'>A Partir</p>
                        <p class='card-price-value'>{(Math.round(props.product.preco * 100) / 100).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardPrincipal
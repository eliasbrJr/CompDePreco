import './CardPrincipal.css'
const CardPrincipal = (props) =>{

    return(
        <button class='button-geral'>
            <div class = 'card-background'>
                <div class = 'card-photo'>
                    <img src={props.product.photo} alt='Foto Produto'/>
                </div>
                <div class = 'card-Text'>
                    <h4> {props.product.title}</h4>
                </div>
                <div class = 'card-price-background'>
                    <div class='card-price-description'>
                        <p class='card-price-value-desc'>A Partir</p>
                        <p class='card-price-value'>{props.product.price}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}
export default CardPrincipal
import { useState, useEffect } from "react"
import ProdutoDataService from "../../../service/ProdutoDataService"
import CardPrincipal from '../../Cards/CardPrincipal'
import './Principal.css'
const Principal = ()=>{
    
    const [ productList, setProductList] = useState([])

    const populateProductList = ()=>{
        setProductList(ProdutoDataService.getAllProdutos())
    }
    useEffect(()=>{
        populateProductList()
    },[])
    return(
        <div class = 'page'>
            <div class = 'title'>
                <h1>
                    Compara Preço
                </h1>
            </div>
            <div class = 'subtitle'>
               <h2> O Menor Preço Você Encontra Aqui </h2>
            </div>
            <div class='cardListBackground'>
                <div class='cards'>
                   {
                       productList.map((item)=>{
                           return <CardPrincipal product={item}/>
                       })
                   }
                </div>    
            </div>
        </div>
    )
}
export default Principal
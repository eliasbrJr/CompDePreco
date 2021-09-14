import { useState, useEffect } from "react"
import Header from '../../header'
import { Alert } from "reactstrap"
import ProdutoDataService from "../../../service/ProdutoDataService"
import CardPrincipal from '../../Cards/CardPrincipal'
import './Principal.css'
const Principal = ()=>{
    
    const [ productList, setProductList] = useState([])
    const [numberPage, setNumberPage] = useState(0)
    const [maxpage, setMaxPage] = useState(0)
    const [nameProduct, setNameProduct] = useState("")

    const movePage = (e)=>{
        if(e.target.id==="next-page"){ 
            if(numberPage != maxpage - 1){
                setProductList([])
                setNumberPage(numberPage+1)
            }
        }
        if(e.target.id==="preview-page"){ 
            if(numberPage > 0 ){
                setNumberPage(numberPage-1)
                setProductList([])
            }
        }

    }
    const populateProductList = ()=>{
        ProdutoDataService.getAllProdutos(numberPage)
        .then(response =>{
            let list = []
            let listProductNames = [...new Set(response.data.content.map((item) => item.nome.toLowerCase()))]
            response.data.content.sort((a,b)=>a.nome.localeCompare(b.nome) || a.preco - b.preco)
            listProductNames.forEach((item)=>{
                list.push(response.data.content.find((e)=>{
                    return e.nome.toLowerCase() == item.toLowerCase()
                }))
            })
            setMaxPage(response.data.totalPages)
            setProductList(list)
        }) 
    }

    const populateProductListFilter = (namefilter)=>{
        if(namefilter){
        ProdutoDataService.getProductByName(namefilter)
        .then(response =>{
            let list = []
            let listProductNames = [...new Set(response.data.content.map((item) => item.nome.toLowerCase()))]
            response.data.content.sort((a,b)=>a.nome.localeCompare(b.nome) || a.preco - b.preco)
            listProductNames.forEach((item)=>{
                list.push(response.data.content.find((e)=>{
                    return e.nome.toLowerCase() == item.toLowerCase()
                }))
            })
            setMaxPage(response.data.totalPages)
            setProductList(list)
        }) 
    }
    }

    useEffect(()=>{
        populateProductList()
    },[]);
    useEffect(()=>{

        populateProductList()
    },[numberPage]);
    return(
        <div className = 'page'>
            <Header filter={populateProductListFilter}/>
            <div className = 'title'>
                <h1>
                    Compara Preço
                </h1>
            </div>
            <div className = 'subtitle'>
               <h2> O Menor Preço Você Encontra Aqui </h2>
            </div>
            <div className = 'button-div'>
                    <button id="preview-page" className='button-act'  onClick={(e)=>movePage(e)}>Anterior</button> 
                    <button id="next-page"  className='button-act' onClick={(e)=>movePage(e)}>Proximo</button>    
                </div>  
            <div className='cardListBackground'>    
                <div className='cards'>
                   
                   { productList.length ?(
                       productList.map((item)=>{
                           return <CardPrincipal product={item}/>
                       })):(
                           <div className='loader-container'>
                                <div class="loader"></div>
                                <span>Carregando</span>
                            </div>
                       )
                   }
                </div>
                
            </div>
        </div>
    )
}
export default Principal
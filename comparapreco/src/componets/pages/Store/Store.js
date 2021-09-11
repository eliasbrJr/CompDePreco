import { useState,useEffect } from "react"
import CardPrincipal from "../../Cards/CardPrincipal"
import LojaDataService from "../../../service/LojaDataService"
import './Store.css'
const Store = ()=>{
    const [ store, setStore] = useState([])

    const populateStore = ()=>{
        setStore(LojaDataService.getAllLojas())
    }
    useEffect(()=>{
        populateStore()
    },[])
    return (
        <div>
            <section class='header-store-section'>
                <div class='store-pic'> 
                    <img class='sotre-pic'src={store.photo} alt='Foto da Loja'/>
                </div>
                <div class='market-name'>
                    <h1>{store.name}</h1>
                </div>
                <section class='adress-section'>
                    <div class='adress-title'>
                        <h3>Onde Nos Encontrar</h3>
                    </div>
                    <div class='adress-frame'>
                        <iframe src={`https://www.google.com/maps/embed?pb=${store.adress}`} ></iframe>
                        <div class='phone-store'>
                            <h4>Ligue já</h4>
                            <h5>{store.phone}</h5>
                        </div>
                    </div>
                </section>
            </section>
            <section class='content-store-page'>
                <section class='filter-section'>
                        <h3>Filtros</h3>
                </section>
                <section class='cards-section'>
                <div class='cardListBackground-store'>
                <div class='cards-store'>
                   {
                       store.products.map((item)=>{
                           return <CardPrincipal product={item}/>
                       })
                   }
                </div>    
            </div>
                </section>
            </section>
        </div>
    )
}
export default Store
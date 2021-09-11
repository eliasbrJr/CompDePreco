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
            <section className='header-store-section'>
                <div className='store-pic'> 
                    <img className='sotre-pic'src={store.photo} alt='Foto da Loja'/>
                </div>
                <div className='market-name'>
                    <h1>{store.name}</h1>
                </div>
                <section className='adress-section'>
                    <div className='adress-title'>
                        <h3>Onde Nos Encontrar</h3>
                    </div>
                    <div className='adress-frame'>
                        <iframe src={`https://www.google.com/maps/embed?pb=${store.adress}`} ></iframe>
                        <div className='phone-store'>
                            <h4>Ligue já</h4>
                            <h5>{store.phone}</h5>
                        </div>
                    </div>
                </section>
            </section>
            <section className='content-store-page'>
                <section className='filter-section'>
                        <h3>Filtros</h3>
                </section>
                <section className='cards-section'>
                <div className='cardListBackground-store'>
                <div className='cards-store'>
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
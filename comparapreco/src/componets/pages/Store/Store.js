import { useState,useEffect } from "react"
import CardPrincipal from "../../Cards/CardPrincipal"
import LojaDataService from "../../../service/LojaDataService"
import './Store.css'
const Store = (props)=>{
    const [ store, setStore] = useState([])
    const idloja = props.match.params.id

    const populateStore = ()=>{
        LojaDataService.getLojaByID(idloja)
        .then(response=>{
            setStore(response.data)
            // editFrame()
        })
        .catch(e=>console.error(e))
    }
    // const editFrame = ()=>{
    //     let frameMap = document.getElementById('map-frame')
    //     frameMap.src='https://maps.google.com/maps?q=41600100&t=&z=13&ie=UTF8&iwloc=&output=embed'
    //     console.log(frameMap)
    // }
    useEffect(()=>{
        populateStore()
    },[])
    var variable = '41940330'
    return (
        <div>{
        store.produtos ?(
        <div>
            <section className='header-store-section'>
                <div className='store-pic'> 
                    <img className='sotre-pic'src={store.foto? store.foto : '/Photos/defautstorescreen.jpg'} alt='Foto da Loja'/>
                </div>
                <div className='market-name'>
                    <h1>{store.nome}</h1>
                </div>
                <section className='adress-section'>
                    <div className='adress-title'>
                        <h3>Onde Nos Encontrar</h3>
                    </div>
                    <div className='adress-frame'>
                        
                    <iframe id='map-frame' src={`https://maps.google.com/maps?q=${variable}&t=&z=13&ie=UTF8&iwloc=&output=embed`}/>
                        
                    <div className='phone-store'>
                            <h4>Ligue já</h4>
                            <h5>{store.telefone}</h5>
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
                        store.produtos.map((item)=>{
                           return <CardPrincipal product={item}/>
                        })
                    }
                </div>    
            </div>
                </section>
            </section>
        </div>  
        )
        :
        (<div/>)
        }
        </div>
    )
}
export default Store 
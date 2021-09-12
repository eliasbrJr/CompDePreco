import LojaData from "../http-common";
// import pic from "../Assets/Photos/fotoloja.jpg"
// import photo1 from '../Assets/Photos/Arroz.png'
// import photo2 from '../Assets/Photos/528219.jpg'
// const loja = {
//     name: 'Mercado Central',
//     adress: '!1m18!1m12!1m3!1d3888.0360261610317!2d-38.51493358466211!3d-12.969546563283195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b6f98b34307%3A0xcf4636cd01b67d9e!2sHub%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1631295015870!5m2!1spt-BR!2sbr',
//     photo: pic,
//     phone : '(71) 99999-9999',
//     products: [
//         {
//             photo:photo1,
//             title:'Arroz Tio João 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'6,00'  
//           },
//           {
//             photo:photo2,
//             title:'Arroz Camil 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'6,00'  
//           },
//           {
//             photo:photo1,
//             title:'Arroz Tio João 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'7,00'  
//           },
//           {
//             photo:photo1,
//             title:'Arroz Tio João 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'6,00'  
//           },
//           {
//             photo:photo2,
//             title:'Arroz Camil 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'6,00'  
//           },
//           {
//             photo:photo1,
//             title:'Arroz Tio João 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'7,00'  
//           },
//           {
//             photo:photo1,
//             title:'Arroz Tio João 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'6,00'  
//           },
//           {
//             photo:photo2,
//             title:'Arroz Camil 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'6,00'  
//           },
//           {
//             photo:photo1,
//             title:'Arroz Tio João 1kg',
//             market: 'Mercado do seu joaquin',
//             adress: 'Rua tanto de numero tanto',
//             price:'7,00'  
//           }
//     ]
// }
const getAllLojas = () =>{
    //return loja
    return LojaData.get("lojas/")
}
const getLojaByID = (id) =>{
  return LojaData.get(`lojas/${id}`)
}
export default{
    getAllLojas,
    getLojaByID
}
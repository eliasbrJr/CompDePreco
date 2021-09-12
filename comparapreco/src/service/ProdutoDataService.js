import ProdutoData from "../http-common"
//import photo1 from ''
//import photo2 from ''
// const productList = [
//     {
//       photo:photo1,
//       title:'Arroz Tio João 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'6,00'  
//     },
//     {
//       photo:photo2,
//       title:'Arroz Camil 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'6,00'  
//     },
//     {
//       photo:photo1,
//       title:'Arroz Tio João 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'7,00'  
//     },
//     {
//       photo:photo2,
//       title:'Arroz Camil 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'6,00'  
//     },
//     {
//       photo:photo1,
//       title:'Arroz Tio João 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'7,00'  
//     }, {
//       photo:photo1,
//       title:'Arroz Tio João 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'6,00'  
//     },
//     {
//       photo:photo2,
//       title:'Arroz Camil 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'6,00'  
//     },
//     {
//       photo:photo1,
//       title:'Arroz Tio João 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'7,00'  
//     },
//     {
//       photo:photo2,
//       title:'Arroz Camil 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'6,00'  
//     },
//     {
//       photo:photo1,
//       title:'Arroz Tio João 1kg',
//       market: 'Mercado do seu joaquin',
//       adress: 'Rua tanto de numero tanto',
//       price:'7,00'  
//     }
// ]
const getAllProdutos = () =>{
    //return productList
    return ProdutoData.get("produtos/")
}
const getProductByName = (name)=>{
  return ProdutoData.get(`produtos?nome=${name}`)
}

export default{
    getAllProdutos,
    getProductByName
}
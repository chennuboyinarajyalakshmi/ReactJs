import ProductItem from './components/productItem'
import "./style.css"
export default function ProductList({products,name}) {
  return (
    <>
    <h1 className='title'>Ecomerce Project</h1>
    <h2 style={{ color: 'red' }} >This is Product List</h2>
    <h4>Hii {name}</h4>
    {products.map((item)=>(<ProductItem singleItem={item} />))}
    
    </>  
  )
}

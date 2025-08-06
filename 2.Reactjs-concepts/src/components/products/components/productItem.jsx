import styles from './product-item.module.css'
function Button() {
  return (
    <div>
     <button className={styles.button}>Click me</button>
    </div>
  )
}

export default function ProductItem({singleItem}) {
  return (
    <div>
      <h6>{singleItem}</h6>
       <Button />
    </div>
  )
}

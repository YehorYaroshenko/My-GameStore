import './CartItem.css'

function CartItem({ title, price, id }) {
  return (
    <div className='cart-item'>
      <span>{title}</span>
      <div className="cart-item_price">
         <span>{price} USD</span>
      </div>
    </div>
  )
}

export default CartItem
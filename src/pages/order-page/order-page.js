import { useSelector } from 'react-redux'
import OrderItem from '../../components/OrderItem/OrderItem'
import { calcTotalPrice } from '../../components/utils'
import './order-page.css'

function OrderPage() {
  const items = useSelector((state) => state.cart.itemsInCart)

  if (items.length < 1) {
    return <h1>Cart is empty</h1>
  }

  return (
    <div className="order-page">
      <div className="order-page_left">
        {items.map((game) => (
          <OrderItem game={game} key={game.id}/>
        ))}
      </div>
      <div className="order-page_right">
        <div className="order-page_total-price">
          <span>
            {items.length} goods worth {calcTotalPrice(items).toFixed(2)} USD.
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage

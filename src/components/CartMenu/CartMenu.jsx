import Button from '../Button/Button'
import { calcTotalPrice } from '../utils'
import CartItem from '../CartItem/CartItem'
import './CartMenu.css'

function CartMenu({ items, onClick }) {
  return (
    <div className="cart-menu">
      <div className="cart-menu_game-list">
        {items.length > 0 ? items.map((game) => <CartItem key={game.title} price={game.price} title={game.title} id={game.id}/>) : 'Cart is Empty'}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu_arrange">
          <div className="cart-menu_total-price">
            <span>Total: </span>
            <span>{calcTotalPrice(items).toFixed(2)} USD</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Checkout
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default CartMenu

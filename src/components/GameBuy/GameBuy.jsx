import { useDispatch, useSelector } from 'react-redux'
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import Button from '../Button/Button'
import './GameBuy.css'

export default function GameBuy({ game }) {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === game.id)

  const handleClick = (e) => {
    e.stopPropagation()
    if( isItemInCart ) {
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemInCart(game))
    }
  }

  return (
    <div className="game-buy">
      <span className="game-buy_price">{game.price} USD</span>
      <Button onClick={handleClick} type={isItemInCart ? 'secondary' : 'primary'}>
        { isItemInCart ? 'Remove from Cart' : 'Add in Cart' }
      </Button>
    </div>
  )
}

import { useCallback, useState } from 'react'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import CartMenu from '../CartMenu/CartMenu'
import ItemsInCart from '../ItemsInCart/ItemsInCart'
import { calcTotalPrice } from '../utils'
import './CartBlock.css'

export default function CartBlock() {
  const [isCartMenuVisible, setisCartMenuVisible] = useState(false)
  const items = useSelector((state) => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    setisCartMenuVisible(false)
    navigate('/order')
  }, [navigate])

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={30}
        className="cart-block_icon"
        onClick={() => setisCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block_total-price">
          {totalPrice.toFixed(2)} USD
        </span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  )
}

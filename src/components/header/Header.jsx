import { Link } from 'react-router-dom'
import CartBlock from '../CartBllock/CartBlock'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='wrapper'>
         <Link to="/" className='header_store-title'>GameStore</Link>
      </div>
      <div className='wrapper header_cart-btn'>
         <CartBlock />
      </div>
    </div>
  )
}

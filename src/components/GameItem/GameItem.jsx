import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setCurrentGame } from '../../redux/cart/games'
import GameBuy from '../GameBuy/GameBuy'
import GameCover from '../GameCover/GameCover'
import GameGenres from '../GameGenres/GameGenres'
import './GameItem.css'

export default function GameItem({game}) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
  }

  return (
    <div className='game-item' onClick={ handleClick }>
      <GameCover image={game.image}/>
      <div className='game-item_details'>
         <span className='game-item_title'>{game.title}</span>
         <span>{game.genres.map((genre) => <GameGenres genre={genre} key={genre}/>)}</span>
         <div className='game-item_buy'>
            <GameBuy game={game}/>
         </div>
      </div>
    </div>
  )
}

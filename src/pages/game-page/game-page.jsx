import { useSelector } from 'react-redux'
import GameBuy from '../../components/GameBuy/GameBuy'
import GameCover from '../../components/GameCover/GameCover'
import GameGenres from '../../components/GameGenres/GameGenres'
import './game-page.css'

function GamePage() {
  const game = useSelector((state) => state.game.currentGame)

  if (!game) return null

  return (
    <div className="game-page">
      <h1 className="game-page_title">{game.title}</h1>
      <div className="game-page_content">
        <div className="game-page_left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube Video Player"
            frameBorder='none'
          ></iframe>
        </div>
        <div className="game-page_right">
          <GameCover image={game.image} />
          <p className='game-page_desc'>{game.description}</p>
          <p className="secondary-text">Popular tags for this product:</p>
          {game.genres.map((genre) => (
            <GameGenres genre={genre} key={genre} />
          ))}
          <div className="game-page_buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage

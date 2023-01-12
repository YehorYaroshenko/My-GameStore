import './HomePage.css'
import GameItem from '../../components/GameItem/GameItem'

export default function HomePage() {
  return (
    <div className='home'>
      {GAMES.map((game) => <GameItem game={game} key={game.id}/>)}
    </div>
  )
}

const GAMES = [
  {
      image: '/gamestore-images/forza_5.png',
      title: 'Forza Horizon 5',
      genres: ['Racer', 'Simulator', 'Open world'],
      price: 19.99,
      video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
      id: 1,
      description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
  },
  {
      image: '/gamestore-images/battlefield_2042.png',
      title: 'Battlefield 2042',
      genres: ['Action', 'Shooter', 'War'],
      video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
      price: 16.99,
      id: 2,
      description: 'Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. Adapt and overcome in a near-future world transformed by disorder. Squad up and bring a cutting-edge arsenal into dynamically changing battlegrounds supporting 128 players, unprecedented scale, and epic destruction.'
  },
  {
      image: '/gamestore-images/life_is_strange_true_colors.png',
      title: 'Life is Strange True Colors',
      genres: ['Deep story', 'Protagonist'],
      video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
      price: 13.99,
      id: 3,
      description: `Alex Chen has long suppressed her curse: the supernatural ability to experience, absorb and manipulate the strong emotions of others, which she sees as blazing, colored auras.`
  },
  {
      image: '/gamestore-images/gta_v.png',
      title: 'Grand Theft Auto V',
      genres: ['Open world', 'Action'],
      video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
      price: 18.99,
      id: 4,
      description: 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.'
  },
  {
      image: '/gamestore-images/rainbow_siege.png',
      title: 'Tom Clancy\'s Rainbow Six® Siege',
      video: 'https://www.youtube.com/embed/6wlvYh0h63k',
      genres: ['Tactic', 'Shooter'],
      price: 17.99,
      id: 5,
      description: 'Master the art of destruction and gadgetry in Tom Clancy’s Rainbow Six Siege. Face intense close quarters combat, high lethality, tactical decision making, team play and explosive action within every moment. Experience a new era of fierce firefights and expert strategy born from the rich legacy of past Tom Clancy`s Rainbow Six games.'
  },
  {
      image: '/gamestore-images/assassins_creed_valhalla.png',
      title: 'Assassin’s Creed Valhalla',
      genres: ['Parkour', 'RPG', 'Open world'],
      video: 'https://www.youtube.com/embed/ssrNcwxALS4',
      price: 21.99,
      id: 6,
      description: 'Assassin`s Creed Valhalla is a multi-platform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassin`s Creed series.'
  },
]
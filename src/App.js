import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomePage from './pages/home-page/HomePage'
import Header from './components/header/Header'
import './index.css'
import { store } from './redux'
import GamePage from './pages/game-page/game-page'
import OrderPage from './pages/order-page/order-page'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App

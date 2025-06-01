import SiteComponent from './components/SiteComponent/SiteComponent'
import './App.css'

function App(): React.JSX.Element {
  const exitFullscreen = () => {
    window.electronAPI.exitFullscreen()
  }

  return (
    <>
      <h2 onClick={exitFullscreen}>Avsluta fullscreen</h2>
      <h1 className="app-header">Tjenare mannen!</h1>

      <div className="app-apps">
        <SiteComponent name="tv4" url="https://www.tv4play.se/" />
      </div>
    </>
  )
}

export default App

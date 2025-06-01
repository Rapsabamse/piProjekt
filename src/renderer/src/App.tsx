import SiteComponent from './components/SiteComponent/SiteComponent'
import './App.css'

interface Site {
  name: string
  url: string
  image?: string
}

const sites: Site[] = [
  {
    name: 'tv4',
    url: 'https://www.tv4play.se/',
    image: ''
  },
  {
    name: 'Netflix',
    url: 'https://www.netflix.com/browse',
    image: ''
  },
  {
    name: 'Viaplay',
    url: 'https://viaplay.se/',
    image: ''
  }
]

function App(): React.JSX.Element {
  const exitFullscreen = () => {
    window.electronAPI.exitFullscreen()
  }

  return (
    <>
      <h2 className="app-header" onClick={exitFullscreen}>
        Avsluta fullscreen
      </h2>

      <div className="app-apps">
        {sites.map((site, index) => {
          return <SiteComponent name={site.name} url={site.url} index={index} />
        })}
      </div>
    </>
  )
}

export default App

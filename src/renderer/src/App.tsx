import SiteComponent from './components/SiteComponent/SiteComponent'
import './App.css'
import QuitComponent from './components/QuitComponent/QuitComponent'
import ThemeToggleComponent from './components/ThemeToggleComponent/ThemeToggleComponent'
import { sites } from '@renderer/sites'

function App(): React.JSX.Element {
  return (
    <div>
      <div className="buttons-wrapper">
        <QuitComponent />
        <ThemeToggleComponent />
      </div>

      <div className="app-apps">
        {sites.map((site, index) => {
          return <SiteComponent name={site.name} url={site.url} index={index} />
        })}
      </div>
    </div>
  )
}

export default App

import './QuitComponent.css'

interface quitComponentProps {}

const QuitComponent: React.FC<quitComponentProps> = () => {
  const exitApp = () => {
    window.electronAPI.quitApp()
  }

  return (
    <div className="quit-component">
      <h2 onClick={exitApp}>Stäng app</h2>
    </div>
  )
}

export default QuitComponent

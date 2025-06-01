import './SiteComponent.css'

interface siteComponentProps {
  name: string
  url: string
  image?: string
}

const SiteComponent: React.FC<siteComponentProps> = ({ name, url, image }) => {
  const goToSite = () => {
    window.electronAPI.loadURL(url)
  }

  return (
    <>
      <div className="site-component-wrapper" onClick={goToSite} style={{ backgroundColor: 'red' }}>
        <img src={image}></img>
        <h1>{name}</h1>
      </div>
    </>
  )
}

export default SiteComponent

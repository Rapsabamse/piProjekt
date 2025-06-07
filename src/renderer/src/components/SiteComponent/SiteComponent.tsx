import './SiteComponent.css'

interface siteComponentProps {
  name: string
  url: string
  image?: string
  index: number
}

const SiteComponent: React.FC<siteComponentProps> = ({ name, url, image, index }) => {
  const goToSite = () => {
    window.electronAPI.loadURL(url)
  }

  return (
    <>
      <div className="site-component-wrapper" key={'site-' + index} onClick={goToSite}>
        <img src={image}></img>
        <h1>{name}</h1>
      </div>
    </>
  )
}

export default SiteComponent

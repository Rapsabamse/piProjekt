import { useState, useEffect } from 'react'
import './ThemeToggleComponent.css'

const lightTheme = {
  '--bg-color': '#5c6ac4',
  '--text-color': '#fefefe',
  '--primary-color': '#ff6b6b',
  '--accent-color': '#70d6ff'
}

const darkTheme = {
  '--bg-color': '#1e1f36',
  '--text-color': '#f5f5f5',
  '--primary-color': '#ff6b6b',
  '--accent-color': '#4dd0e1'
}

const applyTheme = (theme: Record<string, string>) => {
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}

const ThemeToggleComponent = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    applyTheme(darkMode ? darkTheme : lightTheme)
  }, [darkMode])

  return (
    <div className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)}>
      <h2> {darkMode ? 'Light Mode' : 'Dark Mode'}</h2>
    </div>
  )
}

export default ThemeToggleComponent

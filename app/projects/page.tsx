import Link from 'next/link'

export default function Projects() {
  return (
    <main>
    <li className="project-index">
    <Link  className="project-index-item"href="/projects/celestial-sound">Celestial Sound Visualiser</Link>
    <Link className="project-index-item" href="/projects/dashboard-extension">Dashboard Chrome Extension</Link>
    <Link  className="project-index-item" href="/projects/pokedex">Pokedex CSS project</Link>
    <Link  className="project-index-item" href="/projects/weather-app">Weather NPM Package</Link>
    </li>
    </main>
  )}
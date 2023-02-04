'use client'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCallback, useState } from 'react'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import particlesOptions from './particles.json'
import { ISourceOptions } from 'tsparticles-engine'
interface Children {
  children: React.ReactNode
}

export default function RootLayout({ children }: Children) {
  const [enter, setEnter] = useState(false)

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    setEnter(true)
  }
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const url: string = window.location.pathname
  
  return (
    <html>
      <head />
      <body>
        {!enter && url === '/' ? (
          <div className="landing">
            <Particles
              options={particlesOptions as ISourceOptions}
              init={particlesInit}
            />
            <button className="enter" onClick={handleClick}>
              e n t e r s i t e
            </button>
            <ul className="rules">
              <li className="rule">click to spawn </li>
              <li className="rule">hover to move </li>
            </ul>
          </div>
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}

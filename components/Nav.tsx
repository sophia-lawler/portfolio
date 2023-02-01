import Link from 'next/link'

export default function Nav() {
  return (
    <div className="nav">
    <Link className="nav-item" href="/projects"> /projects</Link>
    <Link className="nav-item" href="/cv"> /cv</Link>
    <Link className="nav-item" href="/"> /about</Link>
    </div>
  )
}

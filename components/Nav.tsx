import Link from 'next/link'
export default function Nav() {
  return (
    <div className="nav">
    <Link className="nav-item" href="/projects"> /Projects</Link>
    <Link className="nav-item" href="/cv"> /CV</Link>
    <Link className="nav-item" href="/"> /Home</Link>
    </div>
  )
}

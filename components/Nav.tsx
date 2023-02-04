import Link from 'next/link'

export default function Nav() {
 
  return (
    <div className="nav">
      {['projects', 'cv', 'about'].map(nav =>  <Link key={nav} className="nav-item" href={`${nav}`} >/{nav}</Link>

      )}
      <Link className="nav-item" href={'/'} >/</Link>
    </div>
  )
}

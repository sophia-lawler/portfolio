import Image from 'next/image'

export default function Footer() {
  return (
    <div className="footer">
      <a className="footer-item" href="mailto:sophialawler@gmail.com">
        <Image src="/mail.png" alt="" width={30} height={30} />
      </a>
      <a className="footer-item" href="https://github.com/sophia-lawler">
        <Image src="/GitHub.png" alt="" width={30} height={30} />
      </a>
      <a
        className="footer-item"
        href="https://thepleasuremajenta.bandcamp.com/"
      >
        <Image src="/bandcamp.png" alt="" width={30} height={30} />
      </a>
    </div>
  )
}

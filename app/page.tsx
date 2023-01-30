import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        alt="butterfly image"
        className="butterfly"
        src="/Butterfly.png"
        width={450}
        height={450}
      ></Image>
      <p> Kia Ora! My name is Sophia</p>
    </main>
  )
}

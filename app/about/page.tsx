import Image from "next/image"
export default function About() {
  return (
    <main>
      <Image src={'/background.jpeg'} alt={"distorted lake"} width={1400} height={400}/>
      <div className="about-text">
      <p className="about">Kia ora! I&apos;m a web developer interested in creative, fun and meaningful software based in Tāmaki Makaurau, Aotearoa, New Zealand. I am particularly interested in digitial literacy and education, providing the tools for different communities to create their own solutions. </p>
      </div>
    </main>
  )}
import style from "./HeroSection.module.css"

function HeroSection() {

  const heroSectionfile = [
    {id: 1, heroImage: "./images/hero-banner-desktop.webp"}
  ]

  return(
    <div className={style.heroContainer}>

      <h1>Healthy meals, zero fuss</h1>
      <p>Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>

      <button className={style.startExploringBtn}><a href="recipes">Start exploring</a></button>

      <div className={style.heroSectionImage}>
        <img src={heroSectionfile[0].heroImage} alt="" />
      </div>

    </div>
  )
}

export default HeroSection
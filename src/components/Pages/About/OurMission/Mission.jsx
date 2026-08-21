
import Header from "../../Home/Header/Header"
import style from "./Mission.module.css"

function Mission () {
  return(
    <div className={style.missionAltimateContainer}>
      <Header />
      <div className={style.missionWrapper}>

        <div className={style.articleContainer}>
          <h5>Our Mission</h5>
          <h2>Help more people cook nourishing meals, more often.</h2>
          <p>Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
          <p>We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
        </div>

        <div className={style.imageContainer}>
          <img src="/images/about-hero-desctop.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mission
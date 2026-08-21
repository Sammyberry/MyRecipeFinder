
import style from "./WhyBuilt.module.css"

function WhyBuilt() {
  return(
<div className={style.builtWrapper}>
  <div className={style.builtArticleContainer}>
    <h3>Built for <span className={style.emphasisText}>real life</span></h3>
    <p>Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.</p>

    <p>Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
  </div>

  <div className={style.builtImageContainer}>
    <img src="../images/real-life-desctop.webp" alt="" />
  </div>
</div>
  )
}

export default WhyBuilt
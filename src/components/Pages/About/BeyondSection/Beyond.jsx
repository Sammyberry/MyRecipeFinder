
import style from "./Beyond.module.css"

function Beyond () {
  return(
    <div className={style.beyondWrapper}>
      
      <div className={style.beyondArticleContainer}>
        <h2>Beyond the plate</h2>
        <p>We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
        <ul>
          <li>Encourage family dinners and social cooking.</li>
          <li>Reduce reliance on single-use packaging and delivery waste.</li>
          <li>Spark curiosity about seasonal produce and local agriculture.</li>
        </ul>
      </div>

      <div className={style.beyondImageContainer}>
        <img src="./images/about-beyond-desctop.webp" alt="" />
      </div>
    </div>
  )
}


export default Beyond
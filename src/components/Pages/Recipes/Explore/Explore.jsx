
import Header from "../../Home/Header/Header"
import style from "./Explore.module.css"

function Explore () {
  return(
    <>
    <Header />

    <div className={style.exploreWrapper}>

      <div className={style.exploreArticle}>
      <h2>Explore our simple, healthy recipes</h2>
      <p>Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
      </div>


    </div>
    </>
  )
}

export default Explore
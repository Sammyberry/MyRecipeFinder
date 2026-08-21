import style from  "./Benefit.module.css"

function Benefit () {


  const flexIconsDetails = [
    {id: 1, carrotIcon: "/images/icon-whole-food-recipes.svg"},
    {id: 2, fussIcon: "/images/icon-minimum-fuss.svg"},
    {id: 3, magnifierIcon: "/images/icon-search-in-seconds.svg"}
  ]

  return(
  <>
    <h2 className={style.benefitTitle}>What you'll get</h2>

    <div className={style.benefitFlexCol}> 
      
      <div className={style.col1}>
        <img className={style.flexIconActive} src={flexIconsDetails
          [0].carrotIcon} alt="" />
        <h3 className={style.flexHeading}>Whole food recipes</h3>
        <p className={style.flexDescription}>Each dishes uses everyday, unprocessed ingredient</p>
      </div>

      <div className={style.col2}>
        <img className={style.flexIcon} src={flexIconsDetails[1].fussIcon} alt="" />
        <h3 className={style.flexHeading}>Minimum fuss</h3>
        <p className={style.flexDescription}>All recipes are designed to make eating healthy quick and easy.</p>
      </div>

      <div className={style.col3}>
        <img className={style.flexIcon} src={flexIconsDetails[2].magnifierIcon} alt="" />
        <h3 className={style.flexHeading}>Search in seconds</h3>
        <p className={style.flexDescription}>Filter by name or ingredient and jump straight to the recipe you need.</p>
      </div>
      
    </div>
  </>
  )
}


export default Benefit

import style from "./Exist.module.css"

function Exist () {
  return(
    <>
    <div className={style.exisWrappert}>
      <h3>Why we exist</h3>

      <div className={style.existFlexContainer}>

        <div className={style.existCol1}>
          <h4>Cut through the noise</h4>
          <p>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
        </div>

        <div className={style.existCol2}>
          <h4>Empower home kitchens</h4>
          <p>When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
        </div>

        <div className={style.existCol3}>
          <h4>Make healthy look good.</h4>
          <p>When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
        </div>


      </div>
    </div>
    </>
  )
}


export default Exist
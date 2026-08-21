import style from "./CallToAction.module.css";

function CallToAction() {
  const ctaIcons = [
    { id: 1, knifeIcon: "../images/pattern-knife.svg" },
    { id: 2, forkIcon: "../images/pattern-fork.svg" },
  ];

  return (
    <div className={style.callToActionWrapper}>
      <img className={style.knifeIcon} src={ctaIcons[0].knifeIcon} alt="" />
      <h2>Ready to cook smarter?</h2>
      <p>Hit the button, pick a recipe, and get dinner on the table fast.</p>
      <img className={style.forkIcon} src={ctaIcons[1].forkIcon} alt="" />
      <button className={style.ctaBtn}>
        <a href="/recipes">Browse recipes</a>
      </button>
    </div>
  );
}

export default CallToAction;

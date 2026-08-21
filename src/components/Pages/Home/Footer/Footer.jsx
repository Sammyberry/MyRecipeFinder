
import style from "./Footer.module.css"

function Footer () {

  const socialHandles = [
    {id: 1, name: "Twitter", socialIon: "../images/twitter-svg.svg", url: "https://x.com/I_sammyberry"},
    {id: 2, name: "GitHub", socialIon: "../images/github-svg.svg", url: "https://github.com/Sammyberry"},
    {id: 3, name: "Instagram", socialIon: "../images/instagram-svg.svg", url: "https://instagram.com/iamsammyberry"},
    {id: 4,name: "Gmail", socialIon: "../images/gmail-svg.svg", url: "mailto:sammy4berry@gmail.com"}
  ]

  return(
  <div className={style.footerWrapper}>
    <p>© 2026 · Samuel Akinbolawa · All rights reserved</p>
    <div className={style.socialIcons}>
     {socialHandles.map((handle, id) => (
      <a key={handle.id} href={handle.url}><img src={handle.socialIon} alt={`${handle.name} Icon`} /></a>
     ))}
    </div>
  </div>
  )
}

export default Footer
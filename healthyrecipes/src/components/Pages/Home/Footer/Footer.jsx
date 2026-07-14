
import style from "./Footer.module.css"

function Footer () {

  const socialHandles = [
    {id: 1, name: "Twitter", socialIon: "../images/twitter-svg.svg", url: "https://x.com/fuhad_dev"},
    {id: 2, name: "GitHub", socialIon: "../images/github-svg.svg", url: "https://github.com/DevKin1"},
    {id: 3, name: "Instagram", socialIon: "../images/instagram-svg.svg", url: "https://instagram.com"},
    {id: 4,name: "Gmail", socialIon: "../images/gmail-svg.svg", url: "mailto:iamadebayoaknade@gmail.com"}
  ]

  return(
  <div className={style.footerWrapper}>
    <p>© MMXXVI · Adebayo Akinade · All rights reserved</p>
    <div className={style.socialIcons}>
     {socialHandles.map((handle, id) => (
      <a key={handle.id} href={handle.url}><img src={handle.socialIon} alt={`${handle.name} Icon`} /></a>
     ))}
    </div>
  </div>
  )
}

export default Footer
import style from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerData = [{ id: 1, logoImage: "/images/logo.svg" }];

  return (
    <div className={style.headerContainer}>
      <a href="/"><img src={headerData[0].logoImage} alt="" /></a>

      <div
        className={`${style.divider} ${
          menuOpen ? style.activeMenu : ""
        }`}
      >

      <ul className={style.navLink}>
        <a href="/">
          <li>Home</li>
        </a>

        <a href="about">
          <li>About</li>
        </a>

        <a href="recipes">
          <li>Recipes</li>
        </a>
      </ul>

      <button className={style.browseBtn}>
        <a href="/recipes">Browse recipes</a>
      </button>
      </div>

      <div className={style.hambugerIcon} onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          width="40"
          height="40px"
          viewBox="0 -0.5 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM14.833 9.25C15.2472 9.25 15.583 8.91421 15.583 8.5C15.583 8.08579 15.2472 7.75 14.833 7.75V9.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM14.833 17.25C15.2472 17.25 15.583 16.9142 15.583 16.5C15.583 16.0858 15.2472 15.75 14.833 15.75V17.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM5.5 9.25H14.833V7.75H5.5V9.25ZM5.5 17.25H14.833V15.75H5.5V17.25Z"
              fill="#163A34"
            />{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Header;

import style from "./Search.module.css";


function Search({sharedData, setSharedData}) {
  console.log(sharedData)
  return (
    <div className={style.mainSearchWrapper}>
      {/* Left Section: Filters */}
      <div className={style.searchSpan1}>
        <div className={style.prepTimeContainer}>
          <select name="prepTime">
            <option value="">Max Prep Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="clear">Clear</option>
          </select>
        </div>

        <div className={style.cookTimeContainer}>
          <select name="cookTime">
            <option value="">Max Cook Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
            <option value="clear">Clear</option>
          </select>
        </div>

        <div className={style.dietContainer}>
          <select name="diet">
            <option value="">Diets</option>
            <option value="gluten-free">Gluten free</option>
            <option value="dairy-free">Dairy free</option>
            <option value="lacto-ovo">Lacto ovo vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="paleo">Paleo</option>
            <option value="primal">Primal</option>
            <option value="whole30">Whole 30</option>
            <option value="fodmap">FODMAP</option>
            <option value="clear">Clear</option>
          </select>
        </div>
      </div>

      {/* Right Section: Search Input Bar */}
      <div className={style.searchSpan2}>
        <div className={style.inputContainer}>
          <span className={style.iconSpan}>
            <svg className={style.magIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21">
              <path fill="#163A34" fillRule="evenodd" d="M3.336 9.318A5.872 5.872 0 0 1 9.2 3.453a5.872 5.872 0 0 1 5.865 5.865 5.873 5.873 0 0 1-5.865 5.866 5.873 5.873 0 0 1-5.865-5.866Zm15.412 8.716-3.832-3.823a7.492 7.492 0 0 0 1.817-4.893c0-4.153-3.38-7.532-7.532-7.532-4.153 0-7.532 3.38-7.532 7.532 0 4.153 3.38 7.532 7.532 7.532a7.477 7.477 0 0 0 4.494-1.502l3.876 3.866 1.177-1.18Z" clipRule="evenodd"/>
            </svg>
          </span>
          <input className={style.inputSearch} type="text" value={sharedData} onChange={e => setSharedData(e.target.value) || <p>No product found</p>} placeholder="Search by name or ingredient..." />

          
        </div>
      </div>
    </div>
  );
}

export default Search;
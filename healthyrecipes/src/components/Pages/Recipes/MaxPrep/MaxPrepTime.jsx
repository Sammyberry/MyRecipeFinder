import { useState } from "react";
// 1. Fixed the import name to match the "styles" variable used below
import styles from "./MaxPrepTime.module.css"; 

function MaxPrepTime() {
  // 2. Restored the missing state logic variables
  const [isOpen, setIsOpen] = useState(false);
  const [maxTime, setMaxTime] = useState("");

  // 3. Restored the missing event handler functions
  function handleRadioChange(e) {
    setMaxTime(Number(e.target.value));
  }

  function handleClear() {
    setMaxTime("");
  }

  return (
    /* 4. Fixed hyphenated CSS modules using ['bracket notation'] */
    <div className={styles['dropdown-container']}>
      
      {/* 1. The Main Dropdown Button */}
      <button 
        className={styles['dropdown-btn']} // Wrapped in styles module
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Max Prep Time {maxTime !== "" ? `: ${maxTime}m` : ""}</span>
        {/* Using a template literal safely with CSS modules */}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>v</span>
      </button>

      {/* 2. The Custom Menu (Only shows if isOpen is true) */}
      {isOpen && (
        <div className={styles['dropdown-menu']}>
          <label className={styles['radio-option']}>
            <input
              type="radio"
              name="prepTime"
              value={0}
              checked={maxTime === 0}
              onChange={handleRadioChange}
            />
            <span>0 minutes</span>
          </label>

          <label className={style => styles['radio-option']}>
            <input
              type="radio"
              name="prepTime"
              value={5}
              checked={maxTime === 5}
              onChange={handleRadioChange}
            />
            <span>5 minutes</span>
          </label>

          <label className={styles['radio-option']}>
            <input
              type="radio"
              name="prepTime"
              value={10}
              checked={maxTime === 10}
              onChange={handleRadioChange}
            />
            <span>10 minutes</span>
          </label>

          {/* 3. The Clear Button */}
          <button 
            className={styles['clear-btn']} 
            onClick={handleClear} 
            disabled={maxTime === ""}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default MaxPrepTime;
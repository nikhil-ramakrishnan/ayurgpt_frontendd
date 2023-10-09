import React, { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const {
    languages,
    setLanguages,
    selectedLanguage,
    setSelectedLanguage,
    showDropdown,
    setShowDropdown,
  } = useContext(LanguageContext);

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);

    // Reorder the languages array to put the selected language at the top
    const updatedLanguages = languages.slice();
    const selectedLanguageIndex = updatedLanguages.findIndex(
      (language) => language.code === code
    );
    const selectedLanguageItem = updatedLanguages.splice(
      selectedLanguageIndex,
      1
    )[0];
    updatedLanguages.unshift(selectedLanguageItem);

    setLanguages(updatedLanguages);

    setShowDropdown(false);
  };

  return (
    <div className="language-selector">
      <div
        className={`selected-language ${showDropdown ? "open" : ""}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {
          languages.find((language) => language.code === selectedLanguage)
            ?.label
        }
      </div>
      {showDropdown && (
        <ul className="language-dropdown">
          {languages.map((language) => (
            <li
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={language.code === selectedLanguage ? "active" : ""}
            >
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;

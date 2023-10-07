import React, { useState } from 'react';
import './LanguageSelector.css'; // Import the CSS file

const LanguageSelector = () => {
  const [languages, setLanguages] = useState([
    { code: 'en', label: 'English' },
    { code: 'sa', label: 'Sanskrit' },
    { code: 'ml', label: 'Malayalam' },
    { code: 'ta', label: 'Tamil' },
    { code: 'mr', label: 'Marathi' },
    { code: 'bn', label: 'Bengali' },
    { code: 'or', label: 'Oriya' },
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);

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
        className={`selected-language ${showDropdown ? 'open' : ''}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {languages.find((language) => language.code === selectedLanguage)
          ?.label}
      </div>
      {showDropdown && (
        <ul className="language-dropdown">
          {languages.map((language) => (
            <li
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={language.code === selectedLanguage ? 'active' : ''}
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

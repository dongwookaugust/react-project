import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./LanguageDropdown.css";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button className="language-btn" onClick={toggleDropdown}>
        <span className="flag">{selectedLanguage.flag}</span>
        <span className="lang-name">{selectedLanguage.name}</span>
        <FaChevronDown className="chevron" />
      </button>

      <ul className={`dropdown-menu ${isOpen ? "visible" : "hidden"}`}>
        {languages.map((lang) => (
          <li key={lang.code} onClick={() => selectLanguage(lang)}>
            <span className="flag">{lang.flag}</span>
            <span className="lang-name">{lang.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;

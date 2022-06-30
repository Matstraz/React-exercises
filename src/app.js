import { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [lang, setLang] = useState("en");

  function handleLanguageChange(event) {
    setLang(event.target.value);
  }

  return (
    <div>
      <select value={lang} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
      <LanguageContext.Provider value={lang}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}
